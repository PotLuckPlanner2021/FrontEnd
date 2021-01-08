import React, {  useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import EventList from './EventList';
import Details from './Details';
import PartyForm from '../components/PartyFormTest';
import Logo from './Logo';
import { Route, Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/userInfo';



const ProtectedPage = ({ userInfo, error, getUserInfo }) => {
  const { push } = useHistory();

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  if (!userInfo) {
    return (
      <h1>Fetching User Data...</h1>
    )
  }

  const logout = () => {
    axiosWithAuth()
      .get('/logout')
      .then( () => {
        localStorage.removeItem('token');
        push('/');
      })
  }

  if (error) {
    return <h2>Error! We've Got a Problem: {error}</h2>
  }

  return (
    <div>
      <nav>
        <Logo />
        <div className="links">
          <Link onClick={logout} className="link">
            Logout
          </Link>
        </div>
      </nav>
      <section className='myPotlucksContainer' >
        <EventList/>
        <Route 
          exact
          path='/MyPotlucks'
          component={PartyForm}
          />
        <Route 
          path={`/MyPotlucks/Details/:potluckid`}
          render={props => <Details {...props} potlucks={userInfo.potlucks}/>}
        />
        </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, {getUserInfo})(ProtectedPage);
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import EventList from './EventList';
import Details from './Details';
import PartyForm from './PartyForm';
import Logo from './Logo';
import { Route, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/userInfo';



const ProtectedPage = ({ userInfo, isFetching, error, getUserInfo }) => {
  // const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    getUserInfo();
  }, []);
  
  const { push } = useHistory();

  const logout = () => {
    axiosWithAuth()
      .get('/logout')
      .then( () => {
        localStorage.removeItem('token');
        push('/');
      })
  }

  // const getUserData = () => {
  //   axiosWithAuth() 
  //     .get('/users/userinfo')
  //     .then(res => {
  //       setUserInfo(res.data);
  //       console.log('Look at my userInfo', res.data.potlucks)
  //     })
  //     .catch(err => {
  //       console.error('OMG NOO', err.response);
  //     })
  // }
  


  if (userInfo === undefined || userInfo === {}) {
    return (
      <h1>Loading...</h1>
    )
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
      <EventList userInfo={userInfo} />
      <Route 
        exact
        path='/MyPotlucks'
        component={PartyForm}
      />
      <Route 
        // exact
        path={`/MyPotlucks/Details`}
        component={Details}
      />
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
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import EventList from './EventList';
import Details from './Details';
import PartyForm from './PartyForm';
import Logo from './Logo';
import { Link } from 'react-router-dom';



const ProtectedPage = () => {
  
  const [userInfo, setUserInfo] = useState();

  const getUserData = () => {
    axiosWithAuth() 
      .get('/users/userinfo')
      .then(res => {
        setUserInfo(res.data);
        console.log('Look at my DATA', res.data.potlucks)
      })
      .catch(err => {
        console.error('OMG NOO', err.response);
      })
  }
  
  useEffect(() => {
    getUserData();
  },[])

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
          <Link to="#" className="link">
            Logout
          </Link>
        </div>
      </nav>
      <EventList userInfo={userInfo} />
      <Details />
      <PartyForm/>
    </div>
  )
}

export default ProtectedPage;
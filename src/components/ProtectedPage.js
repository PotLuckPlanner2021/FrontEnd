import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import EventList from './EventList';

const ProtectedPage = () => {

  return (
    <div>
      <EventList />
    </div>
  )
}

export default ProtectedPage;
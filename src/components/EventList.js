import React from 'react';
import { Link } from 'react-router-dom';
import newEventImage from '../assets/potluck5.jpg';
import EventCard from './EventCard'

const EventList = () => {

  return (
    <div>
      <h2>My Potlucks</h2>
      <div className='eventList'>
        <Link to='newPotluck' className='eventCard'>
          <img src={newEventImage} alt='New Event' className='eventImage' />
          <h3>Add New Potluck</h3>
        </Link>
        <EventCard />
      </div>
    </div>
  )
};
export default EventList;
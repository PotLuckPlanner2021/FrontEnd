import React from 'react';
import { Link } from 'react-router-dom';
import newEventImage from '../assets/potluck5.jpg';

const EventCard = (props) => {
  
  if (props === {}) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div>
      <Link to='newPotluck' className='eventCard'>
          <img src={newEventImage} alt='New Event' className='eventImage' />
          <h3>Add New Potluck</h3>
      </Link>
      <h4>Test</h4>
    </div>
  )
};

export default EventCard;
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = (props) => {
  const { event } = props;
  return (
    <div>
      <Link to={`/MyPotlucks/Details/${event.potluckid}`} className='eventCard'>
          <img src={event.imgurl ? event.imgurl : 'https://source.unsplash.com/600x400/?potluck'} alt='New Event' className='eventImage' />
          <h3>{event.name}</h3>
          <h4>Hosted By: {event.host}</h4>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>

      </Link>
    </div>
  )
};

export default EventCard;
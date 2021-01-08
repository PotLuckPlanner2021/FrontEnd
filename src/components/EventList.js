import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard'

const EventList = (props) => {

  console.log('In EventList', props)
  return (
    <div>
      <h2>My Potlucks</h2>
      <div className='eventList'>
        <Link to='/MyPotLucks/NewPotLuck' className='eventCard'>
          <img src='https://source.unsplash.com/600x400/?potluck' alt='New Event' className='eventImage' />
          <h3>Add New Potluck</h3>
        </Link>
        {/* {!props.userInfo.potlucks.length ? 'No Potlucks Yet!' : props.userInfo.potlucks.map(event => {
          return (
            <div>
              <EventCard event={event} key={event.potluckid} />
            </div>
          )
        })} */}
      </div>
    </div>
  )
};
export default EventList;
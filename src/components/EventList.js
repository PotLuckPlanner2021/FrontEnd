import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard'
import { connect } from 'react-redux';

const EventList = (props) => {

  console.log('In EventList', props)
  return (
    <div>
      <h2>My Potlucks</h2>
      <div className='eventList'>
        <Link to='/MyPotLucks/' className='eventCard'>
          <img src='https://source.unsplash.com/600x400/?potluck' alt='New Event' className='eventImage' />
          <h3>Add New Potluck</h3>
        </Link>
        {props.userInfo.potlucks.map(event => {
          return (
              <EventCard event={event} key={event.potluckid} />
          )
        })}
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return{
    userInfo: state.userInfo,
    isFetching: state.isFetching
  }
}
export default connect(mapStateToProps, {})(EventList);
import React from 'react';
import { Link, Route, useRouteMatch, useParams } from 'react-router-dom';
import Details from './Details';

const EventCard = (props) => {
  const { event } = props;
  // console.log('In EventCard', props)
  // if (props === {}) {
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }

  // const potluck = props.potlucks.find(
  //   thing => `${thing.potluckid}` === event.match.params.potluckid
  // );
  const { url, path } = useRouteMatch();
  return (
    <div>
      {/* <Route 
        // exact
        path={`/MyPotlucks/Details/:potluckid`}
        render={props => <Details {...props} event={event}/>}
      /> */}
      <Link to={`/MyPotlucks/Details/${event.potluckid}`} className='eventCard'>
          <img src={event.imgurl} alt='New Event' className='eventImage' />
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
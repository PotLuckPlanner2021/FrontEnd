import React from 'react'
import '../style/index.css';
import { useParams } from 'react-router-dom';


const Details = (props) => {
    const { potluckid } = useParams();
    console.log('detail params', useParams())
    console.log('In details', props);
    console.log('in the details, and here is the id:', potluckid)

    const potluckInfo = props.potlucks.find(potluck => {
        // eslint-disable-next-line eqeqeq
        return potluck.potluckid == potluckid;
    })

    console.log('here is the found info:', potluckInfo)

    return (
        <div>
            <div className="pinkBox">
                <h1 className="detailsEventName">{potluckInfo.name}</h1>
                <div className="details">
                    <p>{potluckInfo.host}</p>
                    <p>{potluckInfo.date}</p>
                    <p>{potluckInfo.time}</p>
                    <p>{potluckInfo.location}</p>
                </div>
                <p className="theme">Our theme is {potluckInfo.theme}!</p>
                <h2>What We Need</h2>
                {potluckInfo.items.map(event => {
                    return <div className="whatWeNeed">
                        <input name="items" type="radio" value={event.itemname} />
                        <label>
                            {event.itemname}
                        </label>
                        </div>
                })}

                <h2>Who's Coming</h2>
                {potluckInfo.guests.map(event => {
                    return <div className="whosComing">
                        <input name="guests" type="radio" value={event.guestname} />
                        <label>
                            {event.guestname}
                        </label>
                    </div>
                })}
                <button className="edit">Edit</button>
            </div>
        </div>
    )
}

export default Details;

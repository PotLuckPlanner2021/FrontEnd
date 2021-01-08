import React from 'react'
import '../style/index.css';
import { useParams } from 'react-router-dom';


const Details = (props) => {
    const { potluckid } = useParams();
    console.log('detail params', useParams())
    console.log('In details', props);
    console.log('in the details, and here is the id:', potluckid)
    const fakeEvent = {
        id: Math.random(),
        host: "Aszalea",
        eventName: "Lord Oh Rings",
        date: "January 20th, 2021",
        time: "5PM",
        location: "@Zoom",
        theme: "Lord of the Rings",
        items: ["The one to rull them onion rings", "A pint of brews", "Lembas Bread", "Afternoon Tea", "Second Breakfast", "Dragon Meat"],
        guests: ["Bhawnish", "Mark", "Justin", "Jay", "Michael", "Edd", "Jennifer", "Julia", "Claudiu", "Robert", "Aszalea", "Nadeem"]
    }

    const potluckInfo = props.potlucks.find(potluck => {
        return potluck.potluckid == potluckid;
    })

    console.log('here is the found info:', potluckInfo)

    return (
        <div>
            <div className="pinkBox">
                <h1 className="detailsEventName">{fakeEvent.eventName}</h1>
                <div className="details">
                    <p>{fakeEvent.host}</p>
                    <p>{fakeEvent.date}</p>
                    <p>{fakeEvent.time}</p>
                    <p>{fakeEvent.location}</p>
                </div>
                <p className="theme">Our theme is {fakeEvent.theme}!</p>
                <h2>What We Need</h2>
                <div className="whatWeNeed">
                    <input
                        name="items"
                        type="radio"
                        value={fakeEvent.items[0]}
                    />
                    <label>{fakeEvent.items[0]}</label>
                    <input
                        name="items"                            
                        type="radio"
                        value={fakeEvent.items[1]}
                    />
                    <label>{fakeEvent.items[1]}</label>
                    <input
                        name="items"
                        type="radio"
                        value={fakeEvent.items[2]}
                    />
                    <label>{fakeEvent.items[2]}</label>
                    <input
                        name="items"
                        type="radio"
                        value={fakeEvent.items[3]}
                    />
                    <label>{fakeEvent.items[3]}</label>
                    <input
                        name="items"
                        type="radio"
                        value={fakeEvent.items[4]}
                    />
                    <label>{fakeEvent.items[4]}</label>
                    <input
                        name="items"
                        type="radio"
                        value={fakeEvent.items[5]}
                    />
                    <label>{fakeEvent.items[5]}</label>
                </div>
                <h2>Who's Coming</h2>
                <div className="whosComing">
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[0]}
                    />
                    <label>{fakeEvent.guests[0]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[1]}
                    />
                    <label>{fakeEvent.guests[1]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[2]}
                    />
                    <label>{fakeEvent.guests[2]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[3]}
                    />
                    <label>{fakeEvent.guests[3]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[4]}
                    />
                    <label>{fakeEvent.guests[4]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[5]}
                    />
                    <label>{fakeEvent.guests[5]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[6]}
                    />
                    <label>{fakeEvent.guests[6]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[7]}
                    />
                    <label>{fakeEvent.guests[7]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[8]}
                    />
                    <label>{fakeEvent.guests[8]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[9]}
                    />
                    <label>{fakeEvent.guests[9]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[10]}
                    />
                    <label>{fakeEvent.guests[10]}</label>
                    <input
                        name="guests"
                        type="radio"
                        value={fakeEvent.guests[11]}
                    />
                    <label>{fakeEvent.guests[11]}</label>
                </div>
                <button className="edit">Edit</button>
            </div>
        </div>
    )
}

export default Details;

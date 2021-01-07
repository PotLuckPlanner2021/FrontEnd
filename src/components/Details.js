import React from 'react'
import '../style/index.css';

const Details = () => {

    const fakeEvent = {
        id: Math.random(),
        host: "Aszalea",
        eventName: "Lord Oh Rings",
        date: "January 20th, 2021",
        time: "5PM",
        location: "@Zoom",
        theme: "Lord of the Rings",
        foodNeeded: ["The one to rull them onion rings", "A pint of brews", "Lembas Bread", "Afternoon Tea", "Second Breakfast", "Dragon Meat"],
        guestAttending: ["Bhawnish", "Mark", "Justin", "Jay", "Michael", "Edd", "Jennifer", "Julia", "Claudiu", "Robert", "Aszalea", "Nadeem"]
    }


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
                        name="foodNeeded"
                        type="radio"
                        value={fakeEvent.foodNeeded[0]}
                    />
                    <label>{fakeEvent.foodNeeded[0]}</label>
                    <input
                        name="foodNeeded"                            
                        type="radio"
                        value={fakeEvent.foodNeeded[1]}
                    />
                    <label>{fakeEvent.foodNeeded[1]}</label>
                    <input
                        name="foodNeeded"
                        type="radio"
                        value={fakeEvent.foodNeeded[2]}
                    />
                    <label>{fakeEvent.foodNeeded[2]}</label>
                    <input
                        name="foodNeeded"
                        type="radio"
                        value={fakeEvent.foodNeeded[3]}
                    />
                    <label>{fakeEvent.foodNeeded[3]}</label>
                    <input
                        name="foodNeeded"
                        type="radio"
                        value={fakeEvent.foodNeeded[4]}
                    />
                    <label>{fakeEvent.foodNeeded[4]}</label>
                    <input
                        name="foodNeeded"
                        type="radio"
                        value={fakeEvent.foodNeeded[5]}
                    />
                    <label>{fakeEvent.foodNeeded[5]}</label>
                </div>
                <h2>Who's Coming</h2>
                <div className="whosComing">
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[0]}
                    />
                    <label>{fakeEvent.guestAttending[0]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[1]}
                    />
                    <label>{fakeEvent.guestAttending[1]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[2]}
                    />
                    <label>{fakeEvent.guestAttending[2]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[3]}
                    />
                    <label>{fakeEvent.guestAttending[3]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[4]}
                    />
                    <label>{fakeEvent.guestAttending[4]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[5]}
                    />
                    <label>{fakeEvent.guestAttending[5]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[6]}
                    />
                    <label>{fakeEvent.guestAttending[6]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[7]}
                    />
                    <label>{fakeEvent.guestAttending[7]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[8]}
                    />
                    <label>{fakeEvent.guestAttending[8]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[9]}
                    />
                    <label>{fakeEvent.guestAttending[9]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[10]}
                    />
                    <label>{fakeEvent.guestAttending[10]}</label>
                    <input
                        name="guestAttending"
                        type="radio"
                        value={fakeEvent.guestAttending[11]}
                    />
                    <label>{fakeEvent.guestAttending[11]}</label>
                </div>
                <button className="edit">Edit</button>
            </div>
        </div>
    )
}

export default Details;

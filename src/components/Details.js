import React from 'react'
import { Link } from "react-router-dom";
import Logo from './Logo';
import '../style/index.css';

const Details = () => {

    const fakeEvent = {
        id: Math.random(),
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
            <nav>
                <Logo />
                <div className="links">
                    <Link to="Logout" className="link">
                        Log Out
                    </Link>
                    <Link to="AddNew" className="link">
                        Add New
                    </Link>
                </div>
            </nav>
            <div className="pinkBox">
                <h1 className="detailsEventName">{fakeEvent.eventName}</h1>
                <div className="details">
                    <p>{fakeEvent.date}</p>
                    <p>{fakeEvent.time}</p>
                    <p>{fakeEvent.location}</p>
                </div>
                <p className="theme">Our theme is {fakeEvent.theme}!</p>
                <h2>What We Need</h2>
                <div className="whatWeNeed">
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <h2>Who's Coming</h2>
                <div className="whosComing">
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <button className="edit">Edit</button>
            </div>
        </div>
    )
}

export default Details;

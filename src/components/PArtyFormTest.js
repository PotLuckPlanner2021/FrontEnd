import React, { useState, useEffect} from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";
import axios from "axios"

const PartyForm = () => {
    
    const [ partyName, setPartyName ] = useState({
        partyName: "",
    })

    const [ date, setDate ] = useState({
        date: "",
    })

    const [ time, setTime ] = useState({
        time: "",
    })

    const [ location, setLocation ] = useState({
        location: "",
    })
    
    const [ host, setHost ] = useState({
        host: "",
    })

    const [ theme, setTheme ] = useState({
        theme: "",
    })

    const [ guests, setGuests ] = useState({
        guests: "",
    })

    const [ theFood, setTheFood ] = useState({
        food: "",
    })

    const addPartyName = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setPartyName({ [name]: usedVal }) 
    }

    const addDate = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setDate({ [name]: usedVal }) 
    }

    const addTime = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setTime({ [name]: usedVal }) 
    }

    const addLocation = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setLocation({ [name]: usedVal }) 
    }

    const addHost = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setHost({ [name]: usedVal }) 
    }

    const addTheme = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setTheme({ [name]: usedVal }) 
    }

    const addGuests = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setGuests({ [name]: usedVal }) 
    }

    const addFood = (partyData) => {
        const { value, name } = partyData.target
        const usedVal = value
        setTheFood({ [name]: usedVal }) 
    }

    
    const food = document.querySelector(".food")
    const people = document.querySelector(".guests")

    function addNewFood (event) {
        event.preventDefault()
        
        const newFood = document.createElement("input")
        newFood.classList = "Food"
        newFood.placeholder = "Food Needed"
        newFood.type = "text"

        return food.append(newFood)
    }

    function addPeople (event) {
        event.preventDefault()
        
        const newPeople = document.createElement("input")
        newPeople.classList = "Guest"
        newPeople.placeholder = "Guests"
        newPeople.type = "text"
        return people.append(newPeople)
        // return .....
        // const addGuests = (partyData) => {
        //     const { value, name } = partyData.target
        //     const usedVal = value
        //     setGuests({ [name]: usedVal }) 
        // }
    }

    function addParty (event) {
        event.preventDefault()
        console.log(partyName, date, time, location, host, theme, guests, theFood)
    }

    return (
        <div>
            <nav>
                <Logo />
                <div className="links">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="Login" className="link">
                    Login
                </Link>
                <Link to="Signup" className="link">
                    Signup
                </Link>
                <Link to="Items" className="link">
                    Items
                </Link>
                </div>
            </nav>
            <section className="centering">
                <img src={Image} className="logins" alt="fruits"></img>

                <section className="partyForm">
                    <h2 className="partyFormHeader">Add New Party</h2>
                    <form 
                        className="partyForm"
                    >
                        <input 
                            onChange={addPartyName}
                            value={partyName.partyName}
                            placeholder="Party Name" 
                            type="text">
                        </input>
                        <input 
                            onChange={addDate}
                            value={date.date}
                            placeholder="Date" 
                            type="text">
                        </input>
                        <input 
                            onChange={addTime}
                            value={time.time}
                            placeholder="Time" 
                            type="text">
                        </input>
                        <input 
                            onChange={addLocation}
                            value={location.location}
                            placeholder="Location" 
                            type="text">
                        </input>
                        <input 
                            onChange={addHost}
                            value={host.host}
                            placeholder="Host" 
                            type="text">
                        </input>
                        <input 
                            onChange={addTheme}
                            value={theme.theme}
                            placeholder="Theme" 
                            type="text">
                        </input>
                        <div className="guests">
                            <input 
                                onChange={addGuests}
                                value={guests.guests}
                                placeholder="Guests" 
                                type="text">
                            </input>
                        </div>
                        <div className="food">
                            <input 
                                onChange={addFood}
                                value={theFood.food} 
                                placeholder="Food Needed" 
                                type="text">
                            </input>
                        </div>
                        <button onClick={addParty}>Add Completed Party</button>
                        <button onClick={addNewFood}>Add Food</button>
                        <button onClick={addPeople}>Add People</button>
                    </form>
                <Link to="Login" className="signupLoginLink">
                    Have an account? Login!
                </Link>
                </section>
            </section>
        </div>
    );
};

export default PartyForm
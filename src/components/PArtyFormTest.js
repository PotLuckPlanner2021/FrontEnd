import React, { useState, useEffect} from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";
import axios from "axios"

const PartyForm = () => {
    
    const [ eventName, setPartyName ] = useState({
                                                    eventName: "",
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

    const [ items, setItems ] = useState({
                                            items: "",
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
        setItems({ [name]: usedVal }) 
    }

    
    const food = document.querySelector(".food")
    const people = document.querySelector(".guests")

    function addNewFood (event) {
        event.preventDefault()
        
        const newItems = document.createElement("input")
        newItems.classList = "Food"
        newItems.placeholder = "Food Needed"
        newItems.type = "text"

        items.append(newItems)
    }

    function addPeople (event) {
        event.preventDefault()
        
        const newPeople = document.createElement("input")
        newPeople.classList = "Guest"
        newPeople.placeholder = "Guests"
        newPeople.type = "text"

        people.append(newPeople)

        
        // const addGuests = (newPeople) => {
        //     console.log(newPeople)
        //     const { value, name } = newPeople.target
        //     const usedVal = value
        //     console.log(usedVal)
        //     setGuests({...guests, [name]: usedVal })
        // }

        // addGuests()
        
        
        // console.log(guests)
        
    }

    // const submit = (e) => {
    //     e.preventDefault();
    //     //NEED END POINT
    //     axios
    //       .post("#")
    //       .then((res) => {
    //         setSignup({
    //           username: "",
    //           fullName: "",
    //           password: "",
    //           confirmPassword: "",
    //         });
    //       })
    //       .catch((err) => {
    //         console.error(err, "error");
    //       });
    //   };
    function addParty (event) {
        event.preventDefault()
        
        const data = {
            eventName,
            date,
            time,
            location,
            host,
            theme,
            guests,
            items,
        }
        console.log(data)
        
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
                            value={eventName.eventName}
                            placeholder="Event Name" 
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
                                value={items.food} 
                                placeholder="Food Needed" 
                                type="text">
                            </input>
                        </div>
                        <button onClick={addParty}>
                            Add Completed Party
                        </button>
                        <button onClick={addFood}>
                            Add Food
                        </button>
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

// export 
//  { partyName, date, time, location, host, theme, guests, theFood }  
 export default PartyForm
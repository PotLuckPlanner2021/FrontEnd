import React, { useState, useEffect} from "react";
// import Logo from "./Logo";
// import { Link } from "react-router-dom";
// import Image from "../assets/potluck5.jpg";
// import axios from "axios"
import axiosWithAuth from '../utils/axiosWithAuth';

const PartyForm = () => {
    
   
    
    const [ name, setName ] = useState("")

    const [ date, setDate ] = useState( "")

    const [ time, setTime ] = useState("")

    const [ location, setLocation ] = useState("")
    
    const [ host, setHost ] = useState("")

    const [ theme, setTheme ] = useState("")

    const [ guests, setGuests ] = useState("")

    const [ items, setItems ] = useState("")

    const [ imgurl, setImgUrl ] = useState("")
        

    
    const addPartyName = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setName(usedVal) 
    }

    const addDate = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setDate(usedVal) 
    }

    const addTime = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setTime(usedVal) 
    }

    const addLocation = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setLocation(usedVal) 
    }

    const addHost = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setHost(usedVal) 
    }

    const addTheme = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setTheme(usedVal) 
    }

    const addGuests = (partyData) => {
        // partyData.preventDefault()

        const { value } = partyData.target
        const usedVal = value
        setGuests(usedVal) 
    }

    const addImgUrl = (partyData) => {
        const { value } = partyData.target
        const usedVal = value
        setImgUrl(usedVal)
    }

    // const food = document.querySelector(".food")
    // const people = document.querySelector(".guests")

    const addFood = (partyData) => {
       
        const { value } = partyData.target
        const usedVal = value
        setItems(usedVal) 
    }

    

    // function createFood (event) {
    //     event.preventDefault()

    //     const newItems = document.createElement("input")
    //     newItems.onChange={addFood}
    //     newItems.placeholder = "Food Needed"
    //     newItems.type = "text"
    //     newItems.value = `${items.items}`

    //     food.append(newItems)
    // }
    // function createPeople (event) {
    //     event.preventDefault()
        
    //     const newPeople = document.createElement("input")
    //         newPeople.onChange={addGuests}
    //         newPeople.classList = "Guest"
    //         newPeople.placeholder = "Guests"
    //         newPeople.type = "text"
    //         newPeople.value = `${guests.guests}`

    //         people.append(newPeople)
    //     }
    
    let userData = {
        "name": name,
        "date": date,
        "time": time,
        "location": location,
        "host": host,
        "theme": theme,
        "guests": [{'guestname':guests}],
        "items": [{'itemname':items}],
        "imgurl": imgurl
    }
console.log(userData);
    const submit = (e) => {
        // e.preventDefault();
        axiosWithAuth()
                .post('/potlucks/4/potlucks', userData)
                .then((res) => {
                    console.log('success!', res.data)
                })
                .catch(err => {
                    console.log('NOOOO FAIL POSTING', err)
                });
            };


    // function addParty (event) {
    //     event.preventDefault()

    //     // addGuests(event)

    //     let userData = {
    //                 name,
    //                 date,
    //                 time,
    //                 location,
    //                 host,
    //                 theme,
    //                 guests,
    //                 items,
    //                 imgurl
    //             }
    //     // axios
    //     // .post("http://pluckplanner.herokuapp.com/potlucks/{userID}/potlucks", {
    //     //         date: date,
    //     //         guests: guests,
    //     //         host: host,
    //     //         // imgurl: null,
    //     //         items: items,
    //     //         locations: location,
    //     //         name: eventName,
    //     //         // potluckid: null
    //     //         theme: theme,
    //     //         time: time,
                

    //     // })
        
        
            
    //         console.log(userData)
    // }
        //     axios
        //       .post("#")
        //       .then((res) => {
        //         null
        //         })
        //       .catch((err) => {
        //         debugger
        //       })
        //   }
        
        // console.log(data)
        
    

    return (
            <section className="centering">
                <section className="partyForm">
                    <h2 className="partyFormHeader">Add New Party</h2>
                    <form 
                        onSubmit={submit}
                        className="partyForm"
                    >
                        <input 
                            onChange={addPartyName}
                            value={name}
                            placeholder="Event Name" 
                            type="text">
                        </input>
                        <input 
                            onChange={addDate}
                            value={date}
                            placeholder="Date" 
                            type="text">
                        </input>
                        <input
                            onChange={addTime}
                            value={time}
                            placeholder="Time" 
                            type="text">
                        </input>
                        <input
                            onChange={addLocation}
                            value={location}
                            placeholder="Location" 
                            type="text">
                        </input>
                        <input
                            onChange={addHost}
                            value={host}
                            placeholder="Host" 
                            type="text">
                        </input>
                        <input 
                            onChange={addTheme}
                            value={theme}
                            placeholder="Theme" 
                            type="text">
                        </input>
                        <div className="guests">
                            <input 
                                onChange={addGuests}
                                value={guests}
                                placeholder="Enter Guest Names Separated by a Comma" 
                                type="text">
                            </input>
                        </div>
                        <div className="food">
                            <input 
                                onChange={addFood}
                                value={items} 
                                placeholder="Enter Food Names Separated by a Comma" 
                                type="text">
                            </input>
                            <input 
                            onChange={addImgUrl}
                            value={imgurl}
                            placeholder="Image Url" 
                            type="text">
                        </input>
                        </div>
                        <button >
                            Add Completed Party
                        </button>
                        {/* <button onClick={createFood}>
                            Add Food
                        </button>
                        <button onClick={createPeople}>Add People</button> */}
                    </form>
                </section>
            </section>
    )
}


export default PartyForm

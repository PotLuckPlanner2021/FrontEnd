import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";

const PartyForm = () => {

    function addFood () {
        return null
        // const food = document.querySelector(".Food")
        // const newFood = document.createElement("input")

        // newFood.classList.add = "Food"
        // newFood.placeholder = "Food Needed"
        // newFood.type = "text"

        // return food.append(newFood)
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
                <form className="partyForm">
                    <input placeholder="Party Name" type="text"></input>
                    <input placeholder="Date" type="text"></input>
                    <input placeholder="Time" type="text"></input>
                    <input placeholder="Location" type="text"></input>
                    <input placeholder="Host" type="text"></input>
                    <input placeholder="Theme" type="text"></input>
                    <input placeholder="Guests" type="text"></input>
                    <input className="Food" placeholder="Food Needed" type="text"></input>
                    
                    <button>Add Completed Party</button>
                    <button onClick={addFood}>Add Food</button>
                    <button>Add People</button>
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
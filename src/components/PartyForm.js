// import React from "react";
// import Logo from "./Logo";
// import { Link } from "react-router-dom";
// import Image from "../assets/potluck5.jpg";

// const PartyForm = () => {

//     const food = document.querySelector(".food")
//     const people = document.querySelector(".guests")

//     function addFood (event) {
//         event.preventDefault()
        
//         const newFood = document.createElement("input")
//         newFood.classList = "Food"
//         newFood.placeholder = "test"
//         newFood.type = "text"

//         food.appendChild(newFood)
//     }

//     function addPeople (event) {
//         event.preventDefault()
        
//         const newPeople = document.createElement("input")
//         newPeople.classList = "Guest"
//         newPeople.placeholder = "test"
//         newPeople.type = "text"

//         people.appendChild(newPeople)
//     }

//     function addParty (event) {
//         event.preventDefault()
//         console.log('test')
//     }

//     return (
//         <div>
//             <nav>
//                 <Logo />
//                 <div className="links">
//                 <Link to="/" className="link">
//                     Home
//                 </Link>
//                 <Link to="Login" className="link">
//                     Login
//                 </Link>
//                 <Link to="Signup" className="link">
//                     Signup
//                 </Link>
//                 <Link to="Items" className="link">
//                     Items
//                 </Link>
//                 </div>
//             </nav>
//             <section className="centering">
//                 <img src={Image} className="logins" alt="fruits"></img>

//                 <section className="partyForm">
//                     <h2 className="partyFormHeader">Add New Party</h2>
//                     <form className="partyForm">
//                         <input placeholder="Party Name" type="text"></input>
//                         <input placeholder="Date" type="text"></input>
//                         <input placeholder="Time" type="text"></input>
//                         <input placeholder="Location" type="text"></input>
//                         <input placeholder="Host" type="text"></input>
//                         <input placeholder="Theme" type="text"></input>
//                         <div className="guests">
//                             <input placeholder="Guests" type="text"></input>
//                         </div>
//                         <div className="food">
//                             <input className="Food" placeholder="Food Needed" type="text"></input>
//                         </div>
//                         <button onClick={addParty}>Add Completed Party</button>
//                         <button onClick={addFood}>Add Food</button>
//                         <button onClick={addPeople}>Add People</button>
//                     </form>
//                 <Link to="Login" className="signupLoginLink">
//                     Have an account? Login!
//                 </Link>
//                 </section>
//             </section>
//         </div>
//     );
// };

// export default PartyForm
// eslint-disable-next-line 
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import "./style/index.css"
import Logo from "./components/Logo";
// import homeImage from "./assets/HomePage.png"
import Image from "./assets/potluck5.jpg";


function Items() {

  const [ button, setButton ] = useState(false)

  const buttons = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
  }

  function itemClicked (num) {
    if (num === 1) {
      buttons.item1 = true
    }

    if (num === 2) {
      buttons.item2 = true
    }

    if (num === 3) {
      buttons.item3 = true
    }

    if (num === 4) {
      buttons.item4 = true
    }

    if (num === 5) {
      buttons.item5 = true
    }

    if (num === 6) {
      buttons.item6 = true
    }

    if (num === 7) {
      buttons.item7 = true
    }

    if (num === 8) {
      buttons.item8 = true
    }

    if (num === 9) {
      buttons.item9 = true
    }
  
    console.log(buttons)
  }
 
    
  return (
    <section className="centering">
      <img src={Image} className="logins" alt="fruits"></img>
      
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
          <Link to="PartyForm" className="link">
            PartyForm
          </Link>
          </div>
        </nav>
        
        <body>
          <div className="Items">
            <h1>Lord Oh Rings</h1>
            <p>Jan 20th, 2021</p>
            <p>5pm @ Zoom</p>
            <p>Our Theme is Lord of the Rings!</p>
            <section className="stuff-to-bring">
              <h2>What We Need</h2>
          
              <button className="item" onClick={() => itemClicked(1)} >
                Onion Rings
              </button>
              <button className="item" onClick={() => itemClicked(2)} >
                Napkins
              </button>
              <button className="item" onClick={() => itemClicked(3)} >
                Beer
              </button>
              <button className="item" onClick={() => itemClicked(4)} >
                Chips
              </button>
              <button className="item" onClick={() => itemClicked(5)} >
                Pie
              </button>
              <button className="item" onClick={() => itemClicked(6)} >
                HotDogs
              </button>
              <button className="item" onClick={() => itemClicked(7)} >
                Corn on the Cob
              </button>
              <button className="item" onClick={() => itemClicked(8)} >
                Crystal Pepsi
              </button>
              <button className="item" onClick={() => itemClicked(9)} >
                Ravioli
              </button>
            </section>
            <section className="member-profile">
              <div className="member-name">
                {/* <img src={profilePic} classname="profile-pic" alt="profile pic">
                </img> */}
                <h2>Who's Bringing What?</h2>
                <p>Bringing: </p>
                <button>Add Stuff</button>
              </div>
            </section>
          </div>
        </body>
    </section>
  )
}

export default Items;
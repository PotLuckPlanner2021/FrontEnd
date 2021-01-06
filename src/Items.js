// eslint-disable-next-line 
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import "./style/index.css"
import Logo from "./components/Logo";
// import homeImage from "./assets/HomePage.png"
import Image from "./assets/potluck5.jpg";


function Items() {

  // const [claimItemOne, setClaimItemOne] = useState(false)

  // const [claimItemTwo, setClaimItemTwo] = useState(false)

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

  function buttonClicked(clickNumber) {
    // console.log("test")
    // console.log(buttons)
    const clicked = buttons.item`${clickNumber}`
    console.log(buttons.clicked)
  }

  // const claimTheItemOne = event => {
  //   event.preventDefault()
  //   setClaimItemOne(true)
  //   setClaimItemTwo(false)
  // }

  // const claimTheItemTwo = event => {
  //   event.preventDefault()
  //   setClaimItemOne(false)
  //   setClaimItemTwo(true)
  // }

  // // const bringingText = event => {
  // //   if (itemOne = true) {
  // //     return itemOne
  // //   }
  // //   if (itemTwo = true) {
  // //     return itemTwo
  // //   }
  // // }

  return (
    <section className="centering">
      <img src={Image} className="logins" alt="fruits"></img>
      <div className="Items">
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
          <h1>Lord Oh Rings</h1>
          <p>Jan 20th, 2021</p>
          <p>5pm @ Zoom</p>
          <p>Our Theme is Lord of the Rings!</p>
          <section className="stuff-to-bring">
            <h2>What We Need</h2>
            <button className="item1" onClick={buttonClicked(1)} >
              Onion Rings
            </button>
            <button className="item2" onClick={buttonClicked(2)} >
              Napkins
            </button>
            <button className="item3" onClick={buttonClicked(3)} >
              Beer
            </button>
            <button className="item4" onClick={buttonClicked(4)} >
              Chips
            </button>
            <button className="item5" onClick={buttonClicked(5)} >
              Pie
            </button>
            <button className="item6" onClick={buttonClicked(6)} >
              HotDogs
            </button>
            <button className="item7" onClick={buttonClicked(7)} >
              Corn on the Cob
            </button>
            <button className="item8" onClick={buttonClicked(8)} >
              Crystal Pepsi
            </button>
            <button className="item9" onClick={buttonClicked(9)} >
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
        </body>
      </div>
    </section>
  );
}

export default Items;
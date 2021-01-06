// eslint-disable-next-line 
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import "./style/index.css"
import Logo from "./components/Logo";
// import homeImage from "./assets/HomePage.png"
import Image from "./assets/potluck5.jpg";

const listOfItemIds = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];

function Items() {

  const [claimTheItem, setTheClaimItem] = useState(false)


  const buttons = {
    item1: claimTheItem,
    item2: claimTheItem,
    item3: claimTheItem,
    item4: claimTheItem,
    item5: claimTheItem,
    item6: claimTheItem,
    item7: claimTheItem,
    item8: claimTheItem,
    item9: claimTheItem,
  }

  const [claimedItem, setClaimedItem] = useState(null) 
  const [unclaimedItem, setUnclaimedItem] =  useState(listOfItemIds)

  const markUnclaimed = id => {
    if (id === claimedItem) {
      return "active"
    }
    else {
      return ""
    }
  };

  const markClaimed = id => {
    if (id === claimedItem) {
      setClaimedItem(null)
    }
    else {
      setClaimedItem(id)
    }
  };  
    
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
          {
            unclaimedItem.map(id =>
              <div
                id={id}
                key={id}
                className={`claimedItem${markUnclaimed(id)}`}
                onClick={() => unclaimedItem(id)}
              >
              </div>
            )
          }


              <button className="item" onClick={claimItem(1)} >
                Onion Rings
              </button>
              <button className="item2" onClick={claimItem(2)} >
                Napkins
              </button>
              <button className="item" onClick={claimItem(3)} >
                Beer
              </button>
              <button className="item" onClick={claimItem(4)} >
                Chips
              </button>
              <button className="item" onClick={claimItem(5)} >
                Pie
              </button>
              <button className="item" onClick={claimItem(6)} >
                HotDogs
              </button>
              <button className="item" onClick={claimItem(7)} >
                Corn on the Cob
              </button>
              <button className="item" onClick={claimItem(8)} >
                Crystal Pepsi
              </button>
              <button className="item" onClick={claimItem(9)} >
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
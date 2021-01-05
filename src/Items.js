import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css';

const buttons = {
  itemOne = claimItemOne,
  itemTwo = claimItemTwo,
}

function Items() {

  const [claimItemOne, setClaimItemOne] = useState(false)

  const claimTheItemOne = event => {
    event.preventDefault()
    setClaimItemOne(true)
    setClaimItemTwo(false)
  }

  const claimTheItemTwo = event => {
    event.preventDefault()
    setClaimItemOne(false)
    setClaimItemTwo(true)
  }

  const bringingText = event => {
    if (itemOne = true) {
      return itemOne
    }
    if (itemTwo = true) {
      return itemTwo
    }
  }

  return (
    <div className="Items">
      <header className="header">
        <h1>Pot Luck Planner</h1>
      </header>
      <body>
        <section className="stuff-to-bring">
          <h2>Click a Button to Claim an Item or to Switch</h2>
          <button className="item-one" onClick={claimTheItemOne}>
            Item One
          </button>
          <button className="item-two" onClick={claimTheItemTwo}>
            Item Two
          </button>
        </section>
        <section className="member-profile">
          <div className="member-name">
            <img src={profilePic} classname="profile-pic" alt="profile pic">
            </img>
            <h2>{profileName}</h2>
            <p>Bringing: {bringingText}</p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Items;
// eslint-disable-next-line 
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import "./style/index.css"
import Logo from "./components/Logo";
// import homeImage from "./assets/HomePage.png"
import Image from "./assets/potluck5.jpg";


function Items() {
  const [ bringing1, setBringing1 ] = useState(false)
  const [ bringing2, setBringing2 ] = useState(false)
  const [ bringing3, setBringing3 ] = useState(false)
  const [ bringing4, setBringing4 ] = useState(false)
  const [ bringing5, setBringing5 ] = useState(false)
  const [ bringing6, setBringing6 ] = useState(false)
  const [ bringing7, setBringing7 ] = useState(false)
  const [ bringing8, setBringing8 ] = useState(false)
  const [ bringing9, setBringing9 ] = useState(false)

  const [ finalChoice, setFinalChoice ] = useState([])

  const buttons = {
    item1: bringing1,
    item2: bringing2,
    item3: bringing3,
    item4: bringing4,
    item5: bringing5,
    item6: bringing6,
    item7: bringing7,
    item8: bringing8,
    item9: bringing9,
  }

  function itemClicked (num) {
    setFinalChoice(num)

    if (num === 1) {
      
      if (buttons.item1 === true) {
        setFinalChoice([])
        return setBringing1(false)
      }
      if (buttons.item1 === false) {
        
        return setBringing1(true)
      }
  }

    if (num === 2) {
      if (buttons.item2 === true) {
        setFinalChoice([])
        return setBringing2(false)
      }
      if (buttons.item2 === false) {
        
        return setBringing2(true)
      }
    }

    if (num === 3) {
      if (buttons.item3 === true) {
        setFinalChoice([])
        return setBringing3(false)
      }
      if (buttons.item3 === false) {
        
        return setBringing3(true)
      }
    }

    if (num === 4) {
      if (buttons.item4 === true) {
        setFinalChoice([])
        return setBringing4(false)
      }
      if (buttons.item4 === false) {
        
        return setBringing4(true)
      }
    }

    if (num === 5) {
      if (buttons.item5 === true) {
        setFinalChoice([])
        return setBringing5(false)
      }
      if (buttons.item5 === false) {
        
        return setBringing5(true)
      }
    }

    if (num === 6) {
      if (buttons.item6 === true) {
        setFinalChoice([])
        return setBringing6(false)
      }
      if (buttons.item6 === false) {
        
        return setBringing6(true)
      }
    }

    if (num === 7) {
      if (buttons.item7 === true) {
        setFinalChoice([])
        return setBringing7(false)
      }
      if (buttons.item7 === false) {
        
        return setBringing7(true)
      }
    }

    if (num === 8) {
      if (buttons.item8 === true) {
        setFinalChoice([])
        return setBringing8(false)
      }
      if (buttons.item8 === false) {
        
        return setBringing8(true)
      }
    }

    if (num === 9) {
      if (buttons.item9 === true) {
        setFinalChoice([])
        return setBringing9(false)
      }
      if (buttons.item9 === false) {
        
        return setBringing9(true)
      }
    }
  }

  const list = document.querySelector(".stuff-to-bring")

  function addStuff () {
    
    const newButton = document.createElement("button")
    newButton.classList = "item"
    newButton.onClick = `{() => itemClicked(5)}`
    newButton.textContent = "test"

    list.appendChild(newButton)
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
                <p>Bringing: {finalChoice}</p>
                <input className="newItem" placeholder="Enter New Items" type="text"></input>
                <button className="add-stuff" onClick={addStuff} >
                  Add Stuff
                </button>
              </div>
            </section>
          </div>
        </body>
    </section>
  )
}

export default Items;
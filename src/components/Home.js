import React from "react";
import Logo from "./Logo";
import homeImage from "../assets/HomePage.png";
// import PartyFormTest from "./PArtyFormTest"
// import Items from "../Items"
import { Link } from "react-router-dom";
import '../style/index.css';

const Home = () => {
  return (
    <div>
      <nav>
        <Logo />
        <div className="links">
          {
            localStorage.getItem('token') && 
            <Link to="MyPotlucks" className="link">
            My Potlucks
            </Link> 
          }
          <Link to="Login" className="link">
            Login
          </Link>
          <Link to="Signup" className="link">
            Signup
          </Link>
          <Link to="ItemsTest" className="link">
            Items
          </Link>
          <Link to="PartyFormTest" className="link">
            PartyFormTest
          </Link>
        </div>
      </nav>
      <h1 className="tag">Better Meals Together</h1>
      <div className="homeImg">
        <img src={homeImage} alt="food"></img>
      </div>
    </div>
  );
};

export default Home;

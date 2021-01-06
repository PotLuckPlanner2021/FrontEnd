import React from "react";
import Logo from "./Logo";
import homeImage from "../assets/HomePage.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Logo />
        <div className="links">
          <Link to="Login" className="link">
            Login
          </Link>
          <Link to="Signup" className="link">
            Signup
          </Link>
          <Link to="Details" className="link">
            Details
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

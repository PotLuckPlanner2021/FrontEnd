import React from "react";
import Logo from "./Logo";
import homeImage from "../assets/HomePage.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Logo />
      <nav>
        <Link to="Login">Login</Link>
        <Link to="Signup">Signup</Link>
      </nav>
      <h1 className="tag">Better Meals Together</h1>
      <div className="homeImg">
        <img src={homeImage} alt="food"></img>
      </div>
    </div>
  );
};

export default Home;

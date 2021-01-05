import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";

const Signup = () => {
  return (
    <div>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="Login">Login</Link>
      </nav>
      <section className="centering">
        <img src={Image} className="logins" alt="fruits"></img>

        <section className="signupLogin">
          <h2 className="signupLoginHeader">Sign-up</h2>
          <form>
            <input placeholder="Username" type="text"></input>
            <input placeholder="Full Name" type="text"></input>
            <input placeholder="Password" type="text"></input>
            <input placeholder="Confirm Password" type="text"></input>
            <button>Signup</button>
          </form>
          <Link to="Login">Have an account? Login!</Link>
        </section>
      </section>
    </div>
  );
};

export default Signup;

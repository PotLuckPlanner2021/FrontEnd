import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";

const Signup = () => {
  return (
    <div>
      <nav>
        <Logo />
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="Login" className="link">
            Login
          </Link>
        </div>
      </nav>
      <section className="centering">
        <img src={Image} className="logins" alt="fruits"></img>

        <section className="signupLogin">
          <h2 className="signupLoginHeader">Sign-upasd</h2>
          <form className="signupLoginform">
            <input placeholder="Username" type="text"></input>
            <input placeholder="Full Name" type="text"></input>
            <input placeholder="Password" type="text"></input>
            <input placeholder="Confirm Password" type="text"></input>
            <button>Signup</button>
          </form>
          <Link to="Login" className="signupLoginLink">
            Have an account? Login!
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Signup;

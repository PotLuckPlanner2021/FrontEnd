import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";

const Signup = () => {
  const [signUp, setSignup] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const [disabled, setDisabled] = useState(true);

  const change = (e) => {
    const { value, name } = e.target;
    const valueToUse = value;
    setSignup({ ...signUp, [name]: valueToUse });
  };

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
          <h2 className="signupLoginHeader">Sign-up</h2>
          <form className="signupLoginform">
            <input
              onChange={change}
              value={signUp.username}
              placeholder="Username"
              name="username"
              type="text"
            ></input>
            <input
              onChange={change}
              value={signUp.fullName}
              placeholder="Full Name"
              name="fullName"
              type="text"
            ></input>
            <input
              onChange={change}
              value={signUp.password}
              placeholder="Password"
              name="password"
              type="text"
            ></input>
            <input
              onChange={change}
              value={signUp.confirmPassword}
              placeholder="Confirm Password"
              name="confirmPassword"
              type="text"
            ></input>
            <button disabled={disabled}>Signup</button>
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

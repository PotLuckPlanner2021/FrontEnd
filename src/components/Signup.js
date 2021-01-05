import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";
import * as yup from "yup";

const Signup = () => {
  //  STATE
  const [signUp, setSignup] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [disabled, setDisabled] = useState(true);

  // ONCHANGE
  const change = (e) => {
    const { value, name } = e.target;
    const valueToUse = value;
    setSignup({ ...signUp, [name]: valueToUse });
  };

  //VALIDATION
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(2, "Username needs to be at least 2 characters long"),
    fullName: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be more than 2 characters long"),
    password: yup
      .string()
      .required("Password is required")
      .min(2, "Password must be at least 2 characters long"),
    confirmPassword: yup
      .string()
      .required("Password is reqired")
      .min(2, "Password must be at least 2 characters long"),
  });

  useEffect(() => {
    schema.isValid(signUp).then((valid) => setDisabled(!valid));
  }, [signUp]);

  // JSX
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

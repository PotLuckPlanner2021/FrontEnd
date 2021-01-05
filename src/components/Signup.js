import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Image from "../assets/potluck5.jpg";
import * as yup from "yup";
import axios from "axios";

const Signup = () => {
  //  STATE
  const [signUp, setSignup] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
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
    setFormErrors(name, valueToUse);
    setSignup({ ...signUp, [name]: valueToUse });
  };

  //VALIDATION
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(4, "Username needs to be at least 4 characters long"),
    fullName: yup
      .string()
      .required("Name is required")
      .min(4, "Name must be more than 4 characters long"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters long"),
    confirmPassword: yup
      .string()
      .required("Password is reqired")
      .min(4, "Password must be at least 4 characters long"),
  });

  useEffect(() => {
    schema.isValid(signUp).then((valid) => setDisabled(!valid));
  }, [signUp]);

  //Validation Errors
  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...setFormErrors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  //SUBMIT
  const submit = (e) => {
    e.preventDefault();
    //NEED END POINT
    axios
      .post("#")
      .then((res) => {
        setSignup({
          username: "",
          fullName: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        console.error(err, "error");
      });
  };

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
          <form className="signupLoginform" onSubmit={submit}>
            <input
              onChange={change}
              value={signUp.username}
              placeholder="Username"
              name="username"
              type="text"
            ></input>
            <br />
            <div>{errors.username}</div>

            <input
              onChange={change}
              value={signUp.fullName}
              placeholder="Full Name"
              name="fullName"
              type="text"
            ></input>
            <br />
            <div>{errors.fullName}</div>

            <input
              onChange={change}
              value={signUp.password}
              placeholder="Password"
              name="password"
              type="text"
            ></input>
            <br />
            <div>{errors.password}</div>

            <input
              onChange={change}
              value={signUp.confirmPassword}
              placeholder="Confirm Password"
              name="confirmPassword"
              type="text"
            ></input>
            <br />
            <div>{errors.confirmPassword}</div>

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

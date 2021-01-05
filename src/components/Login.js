import React, { useState, useEffect } from "react";
import Image from "../assets/potluck5.jpg";
import Logo from "./Logo";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  const change = (e) => {
    const { value, name } = e.target;
    const valueToUse = value;
    setForm({ ...form, [name]: valueToUse });
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(2, "Username needs to be more then 2 characters long"),
    password: yup
      .string()
      .required("Password required")
      .min(2, "Password must be more than 2 characters long"),
  });

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <div>
      <nav>
        <Logo />
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="Signup" className="link">
            Signup
          </Link>
        </div>
      </nav>
      <section className="centering">
        <img src={Image} className="logins" alt="fruits"></img>
        <section className="signupLogin">
          <h2 className="signupLoginHeader">Login</h2>
          <form className="signupLoginform">
            <input
              onChange={change}
              value={form.username}
              name="username"
              placeholder="Username"
              type="text"
            ></input>
            <input
              onChange={change}
              value={form.password}
              name="password"
              placeholder="Password"
              type="text"
            ></input>
            <button disabled={disabled}>Login</button>
          </form>
          <Link to="Signup" className="signupLoginLink">
            Don't have an account? Sign up!
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Login;

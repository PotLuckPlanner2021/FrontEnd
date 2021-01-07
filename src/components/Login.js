import React, { useState, useEffect } from "react";
import Image from "../assets/potluck5.jpg";
import Logo from "./Logo";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //STATE
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [disabled, setDisabled] = useState(true);

  //ONCHANGE
  const change = (e) => {
    const { value, name } = e.target;
    const valueToUse = value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  //VALIDATION
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(4, "Username needs to be more then 4 characters long"),
    password: yup
      .string()
      .required("Password required")
      .min(4, "Password must be more than 4 characters long"),
  });

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form, schema]);

  //Validation Errors
  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...setFormErrors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  //SUBMIT

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://pluckplanner.herokuapp.com/login",
        `grant_type=password&username=${form.username}&password=${form.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setForm({
          username: "",
          password: "",
        });
        history.push("/MyPotlucks");
      })
      .catch((err) => {
        console.error(err.response, "error");
      });
  };

  //JSX
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
          <form className="signupLoginform" onSubmit={submit}>
            <input
              onChange={change}
              value={form.username}
              name="username"
              placeholder="Username"
              type="text"
            ></input>
            <br />

            <div>{errors.username}</div>
            <br />
            <input
              onChange={change}
              value={form.password}
              name="password"
              placeholder="Password"
              type="text"
            ></input>
            <br />
            <div>{errors.password}</div>
            <br />

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

//Fix the padding for the button in login
//attach button to page via log in and signup

import React from "react";
import Image from "../assets/potluck5.jpg";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="Signup">Signup</Link>
      </nav>
      <section className="centering">
        <img src={Image} className="logins" alt="fruits"></img>
        <section className="signupLogin">
          <h2 className="signupLoginHeader">Login</h2>
          <form>
            <input placeholder="Username" type="text"></input>
            <input placeholder="Password" type="text"></input>
            <button>Login</button>
          </form>
          <Link to="Signup">Don't have an account? Sign up!</Link>
        </section>
      </section>
    </div>
  );
};

export default Login;

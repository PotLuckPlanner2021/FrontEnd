import React from "react";
import Image from "../assets/potluck5.jpg";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Login = () => {
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
            <input placeholder="Username" type="text"></input>
            <input placeholder="Password" type="text"></input>
            <button>Login</button>
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

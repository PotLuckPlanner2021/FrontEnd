<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
=======
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route } from "react-router-dom";
>>>>>>> 6d8c6dfc6ae38298154a18e300671fdc2cf20de0

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactasd
        </a>
      </header>
=======
      <Route exact path="/" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
>>>>>>> 6d8c6dfc6ae38298154a18e300671fdc2cf20de0
    </div>
  );
}

export default App;

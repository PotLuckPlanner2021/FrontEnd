import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Items from "./Items"
import PartyForm from "./components/PartyForm"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
      <Route path="/Items" component={Items} />
      <Route path="/PartyForm" component={PartyForm} />
    </div>
  );
}

export default App;

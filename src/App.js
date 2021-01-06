import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Details from "./components/Details";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
      <Route path="/Details" component={Details}/>
    </div>
  );
}

export default App;

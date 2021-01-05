import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
    </div>
  );
}

export default App;

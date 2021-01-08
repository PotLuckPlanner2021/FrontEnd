import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import Items from "./Items";
// import PartyForm from "./components/PartyForm";
// import Details from './components/Details'
import ProtectedRoute from "./utils/ProtectedRoute";
import ProtectedPage from "./components/ProtectedPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <ProtectedRoute path="/MyPotlucks" component={ProtectedPage} />
        {/* <ProtectedRoute path='/MyPotlucks/NewPotLuck' component={PartyForm} /> */}

        {/* <Route path='/MyPotlucks/Details'  component={Details} /> */}
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;

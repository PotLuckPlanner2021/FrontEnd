import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Items from "./Items";
import PartyForm from "./components/PartyForm";
import ProtectedRoute from "./utils/ProtectedRoute";
import ProtectedPage from "./components/ProtectedPage";
// import EventList from './components/EventList';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <EventList /> */}
      <Switch>
        <ProtectedRoute exact path="/MyPotlucks" component={ProtectedPage} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Items" component={Items} />
        <Route path="/NewPotluck" component={PartyForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

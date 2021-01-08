import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ItemsTest from "./components/ItemsTest";
import PartyForm from "./components/PartyFormTest";
import ProtectedRoute from "./utils/ProtectedRoute";
import ProtectedPage from "./components/ProtectedPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Route path="/PartyFormTest" component={PartyForm}/>
        <Route path="/ItemsTest" component={ItemsTest} />
        <ProtectedRoute path="/MyPotlucks" component={ProtectedPage} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;

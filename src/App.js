import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/HomeScreen";
import Ticket from "./screens/TicketScreen";
import Action from "./screens/ActionScreen";
import Status from "./screens/StatusScreen";
import History from "./screens/HsitoryScreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/actions" component={Action} />
          <Route path="/status" component={Status} />
          <Route path="/history" component={History} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

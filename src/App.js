//import logo from "./logo.svg";
//import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/HomeScreen";
import Ticket from "./screens/TicketScreen";
import Action from "./screens/ActionScreen";
import Status from "./screens/StatusScreen";
import History from "./screens/HsitoryScreen";
import Login from "./screens/LoginScreen";
import Register from "./screens/RegisterScreen";
import SingleTicket from "./screens/SingleTicket";
import Single from "./screens/Single";
import TicketIssue from "./screens/TicketIssue";
import { singleticket } from "./actions/ticketActions";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Home" component={Home} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/actions" component={Action} />
          <Route path="/status" component={Status} />
          <Route path="/history" component={History} />
          <Route path="/single_ticket/:case_id" component={TicketIssue} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

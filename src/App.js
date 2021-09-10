import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import EditUser from "./components/EditUser/EditUser";
import Home from './components/Home/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/edit/:_id">
          <EditUser></EditUser>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

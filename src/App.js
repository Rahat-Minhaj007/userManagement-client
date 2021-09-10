import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
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

  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (
    <Router>
      {
        spinner && <Loader className='spinner'
          type="Bars"
          color="black"
          height={80}
          width={80}
          timeout={4000}
        />
      }
      {!spinner &&
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

        </Switch>}
    </Router>
  );
}

export default App;

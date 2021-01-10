import React from "react";
import { useSelector } from "react-redux";
import LogInPage from "./components/LoadingAndLogIn/LogInPage";
import MainPage from "./components/MainPage";
import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";

function App() {
  const token = useSelector((state) => state.logging.token);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/dashboard" component={MainPage} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  } else {
    routes = routes = (
      <Switch>
        <Route path="/login" component={LogInPage} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <Router>
      <div>{routes}</div>
    </Router>
  );
}

export default App;

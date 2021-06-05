import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cats from "./pages/Cats";
import Form from "./pages/Form";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li className="header__listItem">
            <Link className="header__listItem__link" to="/cats">
              List of cats
            </Link>
          </li>
          <li className="header__listItem">|||</li>
          <li className="header__listItem">
            <Link className="header__listItem__link" to="/register">
              Fill in the forms
            </Link>
          </li>
        </ul>
        <div className="divisor"></div>
        <Switch>
          <Route path="/cats" component={Cats} />
          <Route path="/register" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;

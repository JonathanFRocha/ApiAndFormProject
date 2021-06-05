import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cats from "./pages/Cats";
import Form from "./pages/Form";
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/cats">List of cats</Link>
          </li>
          <li>
            <Link to="/register">Fill in the forms</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/cats" component={Cats} />
          <Route path="/register" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;

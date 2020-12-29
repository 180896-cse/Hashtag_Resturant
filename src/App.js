import React, { Component } from "react";
import ReactDom from "react-dom";
import "./styles.css";
import Landing_view from "./components/Landing_view";
import Tablebooking_view from "./components/Tablebooking_view";
import Director_pen from "./components/Director_pen";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing_view />
          </Route>
          <Route path="/Director_pen" component={Director_pen} />
          <Route path="/Tablebooking_view" component={Tablebooking_view} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import ReactDom from "react-dom";
import "./styles.css";
import Landing_view from "./components/Landing_view";

import Order_view from "./components/Order_view";
class App extends Component {
  render() {
    return (
      <div>
        <Landing_view />
      </div>
    );
  }
}

export default App;

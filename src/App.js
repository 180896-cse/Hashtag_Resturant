import React, { Component } from "react";
import ReactDom from "react-dom";
import "./styles.css";
import Landing_view from "./components/Landing_view";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (<Landing_view />), (<Navbar />);
  }
}

export default App;

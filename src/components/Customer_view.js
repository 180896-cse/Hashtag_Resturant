import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Customer_view.css";
import ScriptTag from "react-script-tag";

class Customer_view extends Component {
  func() {
    console.log("log");
  }
  render() {
    this.func();
    return (
      <div>
        <img src="https://wallpaperaccess.com/full/271965.jpg" />
        <h1>hi its me customer_view.js</h1>
      </div>
    );
  }
}

export default Customer_view;

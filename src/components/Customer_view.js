import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Customer_view.css";
import ScriptTag from "react-script-tag";
import { Call } from "@material-ui/icons";
class Customer_view extends Component {
  func() {
    window.onload = function () {
      console.log("ok");
      return this;
    };
    Call(this.func);
  }
  render() {
    return (
      <div>
        <img src="https://wallpaperaccess.com/full/271965.jpg" />
        <h1>hi its me customer_view.js</h1>
      </div>
    );
  }
}

export default Customer_view;

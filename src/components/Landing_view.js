import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Landing_view.css";
import main_bg from "../assets/26.jpg";
import Navbar_view from "./Navbar_view";
import Order_view from "./Order_view";

class Landing_view extends Component {
  render() {
    return (
      <div className="landing-container">
        <Navbar_view className="nav-bar" />
        <div className="text-container">
          <img className="img-fluid main_bg" src={main_bg} />
          <div className="main_txt">
            <h6>Premium</h6>
            <p>Quality</p>
            <h1 style={{ fontStyle: "italic" }}>
              Resturant
              <br />& Drinks
            </h1>
          </div>
        </div>
        <Order_view />
      </div>
    );
  }
}

export default Landing_view;

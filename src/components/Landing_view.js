import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Landing_view.css";
import main_bg from "../assets/15.jpg";
import Navbar_view from "./Navbar_view";
import Order_view from "./Order_view";
import Foodmenu_view from "./Foodmenu_view";
import Footer_view from "../components/Footer_view";

class Landing_view extends Component {
  render() {
    return (
      <div className="landing-container">
        <Navbar_view className="nav-bar" />
        <div className="text-container">
          <img className="img-fluid main_bg" src={main_bg} />
          <div className="main_txt">
            <div className="rar">
              <h6>Premium</h6>
              <p className="sar">Quality</p>
              <h1 style={{ fontStyle: "italic" }}>
                Resturant
                <br />& Drinks
              </h1>
            </div>
          </div>
        </div>
        <Order_view />
        <Foodmenu_view />
        <Footer_view />
      </div>
    );
  }
}

export default Landing_view;

import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Landing_view.css";
import main_bg from "../assets/26.jpg";
import Navbar_view from "./Navbar_view";

import Story_view from "./Story_view";

class Landing_view extends Component {
  render() {
    return (
      <div className="main">
        <img className="img-fluid main_bg" src={main_bg} />
        <div className="main_txt">
          <h1 style={{ fontStyle: "italic" }}>
            Resturant
            <br />& Drinks
          </h1>
        </div>
      </div>
    );
  }
}

export default Landing_view;

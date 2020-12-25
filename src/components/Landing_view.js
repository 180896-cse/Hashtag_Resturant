import React, { Component } from "react";

import ReactDom from "react-dom";

import "../css/Landing_view.css";

import main_bg from "../assets/26.jpg";

import Navbar_view from "./Navbar_view";

import Jumbotron from "react-bootstrap/Jumbotron";

import Story_view from "./Story_view";

class Landing_view extends Component {
  render() {
    const imgStyle = {
      backgroundImage: `url(${main_bg})`,

      position: "fixed",

      minWidth: "100%",

      minHeight: "100%",

      backgroundSize: "cover",

      backgroundPosition: "center",

      backgroundRepeat: "no-repeat",

      filter: "blur(5px)"
    };

    return (
      <div>
        <div style={imgStyle}></div>

        <Navbar_view />

        <div className="banner_tittle">
          <p>
            Restaurant
            <br /> & Drinks
          </p>
        </div>
      </div>
    );
  }
}

export default Landing_view;

import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Landing_view.css";
import main_bg from "../assets/26.jpg";
import Navbar from "./Navbar";

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
      <section>
        <Navbar />
        <div style={imgStyle}></div>

        <div className="banner_tittle">
          <h1>
            Restaurant
            <br /> & Drinks
          </h1>
        </div>
      </section>
    );
  }
}

export default Landing_view;

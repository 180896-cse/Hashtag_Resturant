import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Navbar.css";
import logo from "../assets/hastag_logo.png";
import menu from "../assets/background.jpg";
import ScriptTag from "react-script-tag";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tablebooking_view from "../components/Tablebooking_view";

class Navbar_view extends Component {
  hamburger_funct() {
    const hamburger = document.querySelector(".hamburger");
    // const navlinks = document.querySelector('.nav-links');
    const line = document.querySelectorAll(".line");
    // const links = document.querySelectorAll('.nav-links li');
    console.log("Check");
    // navlinks.classList.toggle("open");
    //   line.classList.toggle("open");
    // links.forEach(link => {
    // link.classList.toggle("fade");
    // });

    if (document.getElementById("sidebar_menu").style.width == "55%") {
      document.getElementById("sidebar_menu").style.width = "0";
      line.forEach((line) => {
        line.classList.toggle("cross");
      });
    } else {
      document.getElementById("sidebar_menu").style.width = "55%";
      line.forEach((line) => {
        line.classList.toggle("cross");
      });
    }
  }

  render() {
    return (
      <Router>
        <div id="main">
          <nav>
            <img src={logo} />
            <div class="hamburger" onClick={this.hamburger_funct}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <div className="menu_option">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Order/Reservation</a>
                </li>
                <li>
                  <a href="#">Director's Pen</a>
                </li>
                <li>
                  <a href="#">Trendings</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>

                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div
              id="sidebar_menu"
              style={{ backgroundImage: "url(" + menu + ")" }}
            >
              <div style={{ color: "#f5f5f5" }} class="container cmenu">
                <div class="row">
                  <a>Home</a>
                </div>
                <div class="row">
                  <a>Order/Reservation</a>
                </div>
                <div class="row">
                  <a>Director's Pen </a>
                </div>
                <div class="row">
                  <a>Trendings</a>
                </div>
                <div class="row">
                  <a>Gallery</a>
                </div>
                <div class="row">
                  <a>Contact Us</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

export default Navbar_view;

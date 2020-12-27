import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Navbar.css";
import logo from "../assets/hastag_logo.png";
import ScriptTag from "react-script-tag";

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
    line.forEach((line) => {
      line.classList.toggle("cross");
    });
  }

  render() {
    return (
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
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar_view;

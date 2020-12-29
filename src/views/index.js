import React, { Component } from "react";
import main_bg from "../assets/26.jpg";
import Navbar from "../components/Navbar_view";
import OrderView from "../components/Order_view";
import FoodMenuView from "../components/Foodmenu_view";
import FooterView from "../components/Footer_view";

class Index extends Component {
  render() {
    return (
      <div className="landing-container">
        <Navbar className="nav-bar" />
        <div className="text-container">
          <img className="img-fluid main_bg" src={main_bg} alt="" />
          <div className="main_txt">
            <h6>Premium</h6>
            <p>Quality</p>
            <h1 style={{ fontStyle: "italic" }}>
              Resturant
              <br />& Drinks
            </h1>
          </div>
        </div>
        <OrderView />
        <FoodMenuView />
        <FooterView />
      </div>
    );
  }
}

export default Index;

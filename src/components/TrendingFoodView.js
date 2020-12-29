import React, { Component } from "react";
import "../css/TrendingFood.css";
import Order_view_image from "../assets/29.jpg";

class TrendingFood extends Component {
  text = [
    "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content",
    "This card has supporting text below as a natural lead-in to additional content. than the first to show that equal height action."
  ];

  render() {
    return (
      <div className="trending-food-view">
        <div className="card">
          <div className="order-view-card-img">
            <img
              className="card-img-top"
              src={Order_view_image}
              alt="Food"
              title="Food"
            />
          </div>
          <div className="card-body" title="Card Body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">{this.getRandomText()}</p>
            <p className="card-text">
              <button className="btn btn-secondary">Taste it</button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  getRandomText() {
    return this.text[Math.floor(Math.random() * 7) % 3];
  }
  moveToUrl() {
    console.log("Move");
  }
}

export default TrendingFood;

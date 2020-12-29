import React, { Component } from "react";
import "../css/TrendingFood.css";
import Order_view_image from "../assets/29.jpg";

const longerText=`This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;
const widerText=`This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content`;
const normalText=`This card has supporting text below as a natural lead-in to additional content. than the first to show that equal height action.`;

class Order_view extends Component {
  render() {
    return (
      <div className="trending-food-view">
          <div className="card">
            <div className="order-view-card-img">
              <img
                className="card-img-top"
                src={Order_view_image}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Recipe 3</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <button className="btn btn-secondary">Taste it</button>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Order_view;

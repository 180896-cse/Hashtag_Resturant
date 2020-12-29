import React, { Component } from "react";
import "../css/Order_view.css";
import Order_view_image from "../assets/29.jpg";
import image1 from "../assets/8.jpg";
import TrendingFood from "./TrendingFoodView";







class Order_view extends Component {
  render() {
    return (
      <div className="order-view-container">
        <div className="pan" >
          <h1>Best from Our Pan</h1>
          <div className="trending-creation-text-container">
            <div className="line"></div>
            <span>Trending Creations</span>
            <div className="line"></div>
          </div>
        </div>
        <div className="card-deck trending-container">

          {/* Trending 1 */}
          <div className="trending-food">
            <TrendingFood/>
          </div>


          {/* Trending 2 */}
          <div className="trending-food">
            <TrendingFood/>
          </div>

          
          {/* Trending 3 */}
          <div className="trending-food">
            <TrendingFood/>
          </div>

        </div>
        <div className="bg-image"><img className="Order_view_image" src={Order_view_image} /></div>
      </div>
    );
  }
}

export default Order_view;

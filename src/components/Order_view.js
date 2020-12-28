import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Order_view.css";
import Order_view_image from "../assets/29.jpg";
import image1 from "../assets/8.jpg";
class Order_view extends Component {
  render() {
    return (
      <div id="parent1">
        <div className="pan" >
          <h1>Best from Our Pan</h1>
          <div className="trending-creation-text-container">
            <div className="line"></div>
            <span>Trending Creations</span>
            <div className="line"></div>
          </div>
        </div>
        {/* <img className="img-fluid Order_view_image" src={Order_view_image} /> */}
        <div class="card-deck trending-container">

            {/* Trending 1 */}
          <div class="card">
            <img
              class="card-img-top"
              src={Order_view_image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Recipe 1</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <button class="btn btn-secondary">Taste it</button>
              </p>
            </div>
          </div>

            {/* Trending 2 */}
          <div class="card">
            <img
              class="card-img-top"
              src={Order_view_image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Recipe 2</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <button class="btn btn-secondary">Taste it</button>
              </p>
            </div>
          </div>

            {/* Trending 3 */}
          <div class="card">
            <img
              class="card-img-top"
              src={Order_view_image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Recipe 3</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <button class="btn btn-secondary">Taste it</button>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-image"></div>
      </div>
    );
  }
}

export default Order_view;

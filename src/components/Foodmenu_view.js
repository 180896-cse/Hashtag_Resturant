import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Foodmenu_view.css";

import food_menu_img from "../assets/food-menu-bg.jpg";
import food_menu_img1 from "../assets/food-menu5.jpg";
import food_menu_img2 from "../assets/8.jpg";
import food_menu_img3 from "../assets/3.jpg";
import food_menu_img4 from "../assets/2.jpg";
import food_menu_img5 from "../assets/food-menu4.jpg";
import food_menu_img6 from "../assets/4.jpg";
class Foodmenu_view extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            /* border: "2px solid red", */
            backgroundImage: "url(" + food_menu_img + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          id="food-menu"
        >
          <div style={{ background: "rgba(0, 0, 0, 0.6)" }}>
            <h2 className="food_menu_heading">
              <u>Food</u> <u>Menu</u>
            </h2>
            <div
              className="shadow-lg p-5"
              style={{
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
                width: "80%",
                marginLeft: "10%"
              }}
            >
              <h2 className="text-center  cuisine">Enjoy The Best Cuisine</h2>
              <div className="row mt-5 d-flex justify-content-space-around">
                <div className="col-12 col-lg-6  ">
                  <div className="d-flex justify-content-space-around row">
                    <div className="col-12 col-lg-6">
                      <img
                        src={food_menu_img1}
                        height="200"
                        width="200"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="d-lg-none text-info text-center py-2 col-12 col-lg-6">
                      <h5>Food Name 1</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                    <div className=" d-none d-lg-block py-2 col-12 col-lg-6">
                      <h5>Food Name 1</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6  ">
                  <div className="d-flex justify-content-space-around row">
                    <div className="col-12 col-lg-6">
                      <img
                        src={food_menu_img2}
                        height="200"
                        width="200"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="d-lg-none text-info text-center py-2 col-12 col-lg-6">
                      <h5>Food Name 2</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                    <div className=" d-none d-lg-block py-2 col-12 col-lg-6">
                      <h5>Food Name 2</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ******************************* */}
              <div className="row mt-5 d-flex justify-content-space-around">
                <div className="col-12 col-lg-6  ">
                  <div className="d-flex justify-content-space-around row">
                    <div className="col-12 col-lg-6">
                      <img
                        src={food_menu_img3}
                        height="200"
                        width="200"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="d-lg-none text-info text-center py-2 col-12 col-lg-6">
                      <h5>Food Name 3</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                    <div className=" d-none d-lg-block py-2 col-12 col-lg-6">
                      <h5>Food Name 3</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6  ">
                  <div className="d-flex justify-content-space-around row">
                    <div className="col-12 col-lg-6">
                      <img
                        src={food_menu_img4}
                        height="200"
                        width="200"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="d-lg-none text-info text-center py-2 col-12 col-lg-6">
                      <h5>Food Name 4</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                    <div className=" d-none d-lg-block py-2 col-12 col-lg-6">
                      <h5>Food Name 4</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********************** */}

              <div className="row mt-5 d-flex justify-content-space-around">
                <div className="col-12 col-lg-6  ">
                  <div className="d-flex justify-content-space-around row">
                    <div className="col-12 col-lg-6">
                      <img
                        src={food_menu_img5}
                        height="200"
                        width="200"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="d-lg-none text-info text-center py-2 col-12 col-lg-6">
                      <h5>Food Name 5</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>

                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                    <div className=" d-none d-lg-block py-2 col-12 col-lg-6">
                      <h5>Food Name 5</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6  ">
                  <div className="d-flex justify-content-space-around row">
                    <div className="col-12 col-lg-6">
                      <img
                        src={food_menu_img6}
                        height="200"
                        width="200"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="d-lg-none text-info text-center py-2 col-12 col-lg-6">
                      <h5>Food Name 6</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price:</p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                    <div className=" d-none d-lg-block py-2 col-12 col-lg-6">
                      <h5>Food Name 6</h5>
                      <p>
                        Description...!
                        <br />
                        Description...!
                      </p>
                      <p className="text-info">Price: </p>
                      <br />
                      <button className="btn btn-dark">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="text-center">
                <button className="btn btn-outline-primary btn-lg rounded-pill">
                  View More!
                </button>
              </div>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br />
          </div>
        </section>
      </div>
    );
  }
}

export default Foodmenu_view;

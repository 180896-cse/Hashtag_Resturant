import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Footer_view.css";
import logo_footer from "../assets/hastag_logo.png";

class Footer_view extends Component {
  render() {
    return (
      <div>
        <footer class="container-fluid bg-grey py-5">
          <div class="container_footer">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6 ">
                    <div class="logo-part">
                      <img src={logo_footer} class="w-50 logo-footer" />
                      <p>
                        Address : ......!!!!!.... 90003
                        <br />
                        Address line 2!............!
                      </p>
                      <h5>
                        <a href="tel:#">Call Us</a>
                      </h5>
                      <h5>
                        <a href="mailto:#">Mail Us</a>
                      </h5>
                    </div>
                  </div>
                  <div class="col-md-6 px-4">
                    <h4> About Hashtag</h4>
                    <p>But horizontal lines can only be a full pixel high.</p>
                    <a href="#" class="btn-footer">
                      {" "}
                      More Info{" "}
                    </a>
                    <br />
                    <a href="#" class="btn-footer">
                      {" "}
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6 px-4">
                    <h4> Know us</h4>
                    <div class="row ">
                      <div class="col-md-6">
                        <ul>
                          <li>
                            {" "}
                            <a href="#"> Home</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> About</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Table Reservation</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Teams</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"></a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"></a>{" "}
                          </li>
                        </ul>
                      </div>
                      {/* <div class="col-md-6 px-4">
                        <ul>
                          <li>
                            {" "}
                            <a href="#"> Cab Faciliy</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Fax</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Terms</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Policy</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Refunds</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="#"> Paypal</a>{" "}
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div class="col-md-6 ">
                    <h4> Newsletter</h4>
                    <div class="social">
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                    <form class="form-footer my-3">
                      <input
                        type="text"
                        placeholder="search here...."
                        name="search"
                      />
                      <input type="button" value="Go" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer_view;

import React, { Component } from "react";
import ReactDom from "react-dom";
import "../css/Tablebooking_view.css";
import table_bg from "../assets/11.jpg";

class Tablebooking_view extends Component {
  render() {
    return (
      <div>
        <div
          style={{ backgroundImage: "url(" + table_bg + ")" }}
          id="booking"
          class="section"
        >
          <div class="section-center">
            <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <div class="booking-cta">
                    <h1>Make your reservation</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate laboriosam numquam at
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-md-offset-1">
                  <div class="booking-form">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input class="form-control" type="text" />
                            <span class="form-label">Name</span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input class="form-control" type="email" />
                            <span class="form-label">Email</span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input class="form-control" type="tel" />
                            <span class="form-label">Phone</span>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <div class="form-group">
                            <span class="form-label">Table</span>
                            <select class="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <span class="select-arrow"></span>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                          <div class="form-group">
                            <span class="form-label">Guests</span>
                            <select class="form-control">
                              <option>1 Person</option>
                              <option>2 People</option>
                              <option>3 People</option>
                            </select>
                            <span class="select-arrow"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input class="form-control" type="date" required />
                            <span class="form-label">Check In</span>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input class="form-control" type="date" required />
                            <span class="form-label">Check Out</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-btn">
                        <button class="submit-btn">Book Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tablebooking_view;

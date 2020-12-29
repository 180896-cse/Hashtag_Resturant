import React from "react";
import director from "../assets/MD_hashtag.jpg";
import "../css/Director_pen.css";
import Footer_view from "../components/Footer_view";
import Navbar_view from "../components/Navbar_view";

const Director_pen = () => {
  return (
    <div className="Director">
      <div class="container">
        <img className="dir_img" src={director} />
        <h3 class="pb-3 mb-4 font-italic border-bottom mnc">Director's pen</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">Blog 1</strong>
                <h6 class="mb-0">
                  <a class="text-dark" href="#">
                    40 Percent of People Can’t Afford Basics
                  </a>
                </h6>
                <div class="mb-1 text-muted small">Nov 12</div>
                <p class="card-text mb-auto">
                  This is a card with supporting text below as a natural lead-in
                  to additional content.
                </p>
                <a
                  class="btn btn-outline-primary btn-sm"
                  role="button"
                  href="https://iqrbt.csb.app/"
                >
                  Continue reading
                </a>
              </div>
              <img
                class="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="https://source.unsplash.com/1600x900/?beer,meat"
                style={{ width: "200px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Director_pen;

import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container hm-nav-bg">
      <div className="col-lg-12 d-flex">
        <div className="col-lg-2 hm-nav-img-bg">
          <div className="hm-nav-img">
            {" "}
            <img src="./lamp.png" alt="" />
          </div>
        </div>
        <div className="col-lg-5">
          <h2>Best Furniture For Your Castle....</h2>
          <div className="">
            <h3>New Furniture Collection</h3>
            <h3>Trends in 2020</h3>
          </div>
          <div className="hm-nav-text4">
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.</h6>

          </div>
            <button className="btn btn-danger col-lg-4 col-md-8 col-sm-12">Shop</button>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  );
}

export default Homepage;

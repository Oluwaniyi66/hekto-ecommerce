import React from "react";

function HomeFp({item}) {
  return (
    <div className="col-lg-12 box-cont me-3">
      
      <div className="col-lg-12 hm-fp-img">
        <div className="hm-fp-img-sm">
          <img src={item.image} alt="" />
        </div>
      </div>
      <div>
        <div>
          {" "}
          <h4>{item.name}</h4>{" "}
        </div>
        <div className="all-boxes">
          <div className="small-bux1"></div>
          <div className="small-bux2"></div>
          <div className="small-bux"></div>
        </div>
        <div>
          <h6>Code- <span>{item.code}</span> </h6>
        </div>
        <div><h5>${item.price}</h5></div>
      </div>
    </div>
  );
}

export default HomeFp;

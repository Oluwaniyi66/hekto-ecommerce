import React from "react";

function HomeLp({lp}) {
  return (
    <div className="col-lg-12 lp-box me-3 my-3">
      <div className="col-lg-12 hm-lp-img">
        <div className="hm-lp-img-child">
          <img src={lp.image} alt="" />
        </div>
      </div>
      <div className="col-lg-12 d-flex mt-2">
          <div className="col-lg-8 hm-lp-h1"><h5>{lp.name}</h5></div>
          <div className="col-lg-4 d-flex ">
                    <div className="col-lg-6 hm-lp-s1"><h4>${lp.discount}</h4></div>
                    <div className="col-lg-6 hm-lp-s2"><h4>${lp.price}</h4></div>
          </div>
      </div>
    </div>
  );
}

export default HomeLp;

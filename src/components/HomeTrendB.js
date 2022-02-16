import React from "react";
import HomeTrendSm from "./HomeTrendSm";

function HomeTrendB() {
    const trendSm = [
        {
            image : './seat.png',
            name : 'Executive Seat chair',
            price: '89',
        },
        {
            image : './seat2.png',
            name : 'Executive Seat chair',
            price: '89',
        },
        {
            image : './seat3.png',
            name : 'Executive Seat chair',
            price: '89',
        }
    ]
  return (
    <div className="htb-m-box d-flex">
      <div className="col-lg-12 htb-box mb-5 me-3">
        <div className="htb-h3">
          <h3>23% off in all products</h3>
        </div>
        <div className="htb-h4">
          <h4>Shop Now</h4>
        </div>
        <div className="htb-image d-flex justify-content-end">
          <div className="htb-img">
            <img src="trend.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-12 htb-box1 mb-5 me-3">
        <div className="htb-h3">
          <h3>23% off in all products</h3>
        </div>
        <div className="htb-h4">
          <h4>Shop Now</h4>
        </div>
        <div className="htb-image d-flex justify-content-end">
          <div className="htb-img">
            <img src="trend2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-12 htb-box2 mb-5 me-3">
          {
              trendSm.map((small)=>(

                  <HomeTrendSm small={small}/>
              ))

          }
      </div>
    </div>
  );
}

export default HomeTrendB;

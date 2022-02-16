import React from "react";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import FooterImage from "../components/FooterImage";
import HomeFp from "../components/HomeFp";
import HomeLp from "../components/HomeLp";
import HomeShopex from "../components/HomeShopex";
import HomeTc from "../components/HomeTc";
import HomeTrendB from "../components/HomeTrendB";
import HomeTrending from "../components/HomeTrending";
import "./Homepage.css";

function Homepage() {
  const featureProduct = [
    {
      id: "001",
      name: "Circle Chair",
      price: "20",
      code: "Y523201",
      image: "./chairone.png",
    },
    {
      id: "001",
      name: "Cantilever chair",
      price: "20",
      code: "Y523201",
      image: "./chairone1.png",
    },
    {
      id: "001",
      name: "Circle Chair",
      price: "20",
      code: "Y523201",
      image: "./chairone2.png",
    },
    {
      id: "001",
      name: "Circle Chair",
      price: "20",
      code: "Y523201",
      image: "./chairone3.png",
    },
  ];
  const LatestProduct = [
    {
      id: "001",
      name: "Comfort Handy Craft",
      price: "60",
      discount: "25",
      image: "./late.png",
    },
    {
      id: "001",
      name: "Comfort Handy Craft",
      price: "60",
      discount: "25",
      image: "./yellowchair.png",
    },
    {
      id: "001",
      name: "Comfort Handy Craft",
      price: "60",
      discount: "25",
      image: "./top.png",
    },
    {
      id: "001",
      name: "Circle Chair",
      price: "60",
      discount: "25",
      image: "./image 3.png",
    },
    {
      id: "001",
      name: "Circle Chair",
      price: "60",
      discount: "25",
      image: "./image 23.png",
    },
    {
      id: "001",
      name: "Circle Chair",
      price: "60",
      discount: "25",
      image: "./image 32.png",
    },
  ];
  const Shopex = [
    {
      id: "1",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "./offer3.png",
    },
    {
      id: "2",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "./offer2.png",
    },
    {
      id: "3",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "./offer14.png",
    },
    {
      id: "4",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "./offerC.png",
    },
  ];
  const hometrending = [
    {
      id: "1",
      name: "Cantilever chair",
      price: "41",
      discount: "26",
      image: "./trendingimg.png",
    },
    {
      id: "2",
      name: "Cantilever chair",
      price: "41",
      discount: "26",
      image: "./image 1170.png",
    },
    {
      id: "3",
      name: "Cantilever chair",
      price: "41",
      discount: "26",
      image: "./image 31.png",
    },
    {
      id: "4",
      name: "Cantilever chair",
      price: "41",
      discount: "26",
      image: "./image 32.png",
    },
  ];
  const top = [
    {
      id: "1",
      name: "Mini LCW Chair",
      price: "60",
      image: "./top.png",
    },
    {
      id: "1",
      name: "Mini LCW Chair",
      price: "60",
      image: "./feat1.png",
    },
    {
      id: "1",
      name: "Mini LCW Chair",
      price: "60",
      image: "trendingimg.png",
    },
    {
      id: "1",
      name: "Mini LCW Chair",
      price: "60",
      image: "./top.png",
    },
  ];
  return (
    <div>
      <div className="hm-nav-bg mb-5">
        <div className="d-flex">
          <div className="col-lg-2 hm-nav-img-bg  me-3">
            <div className="hm-nav-img">
              {" "}
              <img src="./lamp.png" alt="" />
            </div>
          </div>
          <div className="container">
            <div className="col-lg-12 d-flex">
              <div className="col-lg-7 mt-5">
                <div className="nfc-mt">
                  <div className="nfc1">
                    <h2>Best Furniture For Your Castle....</h2>
                  </div>
                  <div className="col-lg-12 nfc">
                    <h3>New Furniture Collection</h3>
                    <h3>Trends in 2020</h3>
                  </div>
                  <div className="hm-nav-text4">
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </h6>
                  </div>
                  <div className="col-lg-6 btn-sty">
                    <button className="btn btn-danger col-lg-4 col-md-8 col-sm-12">
                      Shop
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 hm-nav-img2">
                <div className="hm-nav-img-child">
                  <img src="./chair.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-box">
          <div className="smal-box"></div>
          <div className="smal-box1"></div>
          <div className="smal-box1"></div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="fp-head">
          <h1>Featured Products</h1>
        </div>
        <div className="d-flex flex-wrap">
          {featureProduct.map((item) => (
            <HomeFp item={item} />
          ))}
        </div>
        <div className="all-box mt-5">
          <div className="small-bax"></div>
          <div className="small-bax1"></div>
          <div className="small-bax1"></div>
          <div className="small-bax1"></div>
        </div>
      </div>

      <div className="container">
        <div className="fp-head">
          <h1>Latest Products</h1>
        </div>
        <div className="d-flex justify-content-center fp-headers">
          <div className="me-3 lp-hd1">
            <h5>New Arrival</h5>
          </div>
          <div className="me-3 lp-hd">
            <h5>Best Seller</h5>
          </div>
          <div className="me-3 lp-hd">
            <h5>Featured</h5>
          </div>
          <div className="me-3 lp-hd">
            <h5>Special Offer</h5>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {LatestProduct.map((lp) => (
            <HomeLp lp={lp} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="fp-head mb-4">
          <h1>What Shopex Offer!</h1>
        </div>
        <div className="d-flex flex-wrap">
          {Shopex.map((shop) => (
            <HomeShopex shop={shop} />
          ))}
        </div>
      </div>
      <div className="mb-4 utp-box">
        <div className="container d-flex ">
          <div className="utp">
            <div className="utp-img">
              <img src="./unique.png" alt="" />
            </div>
          </div>
          <div className="utp1">
            <div className="col-lg-10 unique-head">
              <h3>Unique Features Of leatest & Trending Poducts</h3>
            </div>
            <div className="col-lg-9 d-flex">
              <div className="utp-sm-box col-lg-2 me-1"></div>
              <div className="utp-sm-h">
                <h3>
                  All frames constructed with hardwood solids and laminates
                </h3>
              </div>
            </div>
            <div className="col-lg-9 d-flex">
              <div className="utp-sm-box1 col-lg-2 me-1"></div>
              <div className="utp-sm-h">
                <h3>
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </h3>
              </div>
            </div>
            <div className="col-lg-9 d-flex">
              <div className="utp-sm-box2 col-lg-2 me-2"></div>
              <div className="utp-sm-h">
                <h3>Arms, backs and seats are structurally reinforced</h3>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="btn btn-danger btn-add-cart col-lg-6 me-2">
                Add to Cart
              </div>
              <div className="brn-ct">
                <h4>B&B Italian Sofa </h4>
                <h4>$32.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fp-head mb-4">
          <h1>Trending Products</h1>
        </div>
        <div className="d-flex flex-wrap">
          {hometrending.map((trending) => (
            <HomeTrending trending={trending} />
          ))}
        </div>
        <div className="d-flex flex-wrap">
          <HomeTrendB />
        </div>
        <div className="container">
          <div className="fp-head">
            <h1>Discount Item</h1>
          </div>
          <div className="d-flex justify-content-center fp-headers">
            <div className="me-3 lp-hd1">
              <h5>Wood Chair</h5>
            </div>
            <div className="me-3 lp-hd">
              <h5>Plastic Chair</h5>
            </div>
            <div className="me-3 lp-hd">
              <h5>Sofa Colletion</h5>
            </div>
          </div>
          <div className="d-flex col-lg-12">
            <div className="col-lg-6 di-pt">
              <div className="di-h1">
                <h1>20% Discount Of All Products</h1>
              </div>
              <div className="di-h2">
                <h2>Eams Sofa Compact</h2>
              </div>
              <div className="di-h3">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget feugiat habitasse nec, bibendum condimentum.
                </h3>
              </div>
              <div className="d-flex">
                <div className="d-flex col-lg-6 me-4">
                  <div>
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div className="di-h4">
                    <h4>Material expose like metals</h4>
                  </div>
                </div>
                <div className="d-flex col-lg-6">
                  <div>
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div className="di-h4">
                    <h4>Clear lines and geomatric figures</h4>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex col-lg-6 me-4">
                  <div>
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div className="di-h4">
                    <h4>Simple neutral colours.</h4>
                  </div>
                </div>
                <div className="d-flex col-lg-6">
                  <div>
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div className="di-h4">
                    <h4>Material expose like metals</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="btn btn-primary di-btn">Shop Now</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="di-image">
                <div className="di-img">
                  <img src="discount.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="fp-head">
            <h1>Top Categories</h1>
          </div>
          <div className="d-flex flex-wrap">
            {top.map((tp) => (
              <HomeTc tp={tp} />
            ))}
          </div>
          <div className="all-box">
            <div className="smal-box"></div>
            <div className="smal-box1"></div>
            <div className="smal-box1"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-4 up-box">
        <div className="up-h1 up-pt">
          <h1>Get Leatest Update By Subscribe 0ur Newslater</h1>
        </div>
        <div className="btn btn-primary up-btn">Shop Now</div>
      </div>
      <FooterImage/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}

export default Homepage;

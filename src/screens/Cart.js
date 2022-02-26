import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import CartTotal from "../components/CartTotal";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import FooterImage from "../components/FooterImage";
import Header from "../components/Header";
import ShopppingCart from "../components/ShopppingCart";
import "./Cart.css";

function Cart() {
  const myCartProduct = JSON.parse(localStorage.getItem("react-use-cart"));
  console.log("my child cart", myCartProduct);
  const { emptyCart } = useCart();


  const user = JSON.parse(localStorage.getItem('user-info'));

  return (
    <div>
      <Header title="Shopping Cart" />
      <Filter />
      <div className="container d-flex">
        <div>
          {myCartProduct.items.map((myCart) => (
            <ShopppingCart myCart={myCart} />
          ))}

          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <Link to="/list">
                  <div className="mx-4 col-lg-3 mb-4 mt-4 btn pts1">
                    Update Cart
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 mb-4 btn pts1" onClick={emptyCart}>
                  Clear Cart
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CartTotal
             
          />
        </div>
      </div>
      <FooterImage />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function CartTotal() {
    const { cartTotal } = useCart();
  return (
    <div>
      <div className="col-lg-12">
        <div className="col-lg-12">
          <h1 className="mb-3 scp1">Cart Total</h1>
          <div className="col-lg-12 cart-body">
            <div className="row">
              <h4 className="col-lg-2 mt-2 mx-1 ctss">Subtotals:</h4>
              <h4 className="col-lg-8 mt-2 ctrs">£{cartTotal}</h4>
              <div>
                <hr className="col-lg-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-12 cart-body">
            <div className="row">
              <h4 className="col-lg-2 mt-2 mx-1 ctss">Total:</h4>
              <h4 className="col-lg-8 mt-2 ctrs">£{cartTotal}</h4>
              <div>
                <hr className="col-lg-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-12 cart-body">
            <div className="row">
              <div className="col-lg-12 stcc1">
                {" "}
                <div className="mx-3  stcc"></div>{" "}
                <h4> Shipping & taxes calculated at checkout</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-12 cart-body">
            <div className="row">
                
              <div className="mx-4 col-lg-10 mb-4 mt-4 btn pts">
              <Link to={'/ship'}>

                Proceed to checkout

                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-4">
          <h1 className="mb-3 scp1">Calculate Shopping</h1>
          <div className="col-lg-12 cart-body">
            <div className="row">
              <h4 className="col-lg-2 mt-2 mx-1 ctss5">Bangladesh</h4>

              <div>
                <hr className="col-lg-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-12 cart-body">
            <div className="row">
              <h4 className="col-lg-8 mt-2 mx-1 ctss5">Mirpur Dhaka - 1200</h4>

              <div>
                <hr className="col-lg-12" />
              </div>
            </div>
          </div>
          <div className="col-lg-12 cart-body">
            <div className="row">
              <h4 className="col-lg-8 mt-2 mx-1 ctss5">Postal Code</h4>

              <div>
                <hr className="col-lg-12" />
              </div>
            </div>
          </div>

          <div className="col-lg-12 cart-body">
            <div className="row">
              <div className="mx-4 col-lg-8 mb-4 mt-4 btn pts1">
                Calculate Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;

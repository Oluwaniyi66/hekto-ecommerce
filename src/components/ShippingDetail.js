import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HektoContext } from "../screens/HektoContext";
import "./ShippingDetail.css";
function ShippingDetail() {
    // const {user_id} = useParams()
  const myCartProduct = JSON.parse(localStorage.getItem("react-use-cart"));
  const [ship, setShip] = useState({
    phone: "",
    fname: "",
    lname: "",
    address: "",
    suit: "",
    city: "",
    country: "",
    code: "",
    user_id : JSON.parse(localStorage.getItem('user-info')).id
  });

  const handleChange = (e) => {
    setShip({ ...ship, [e.target.name]: e.target.value });
    console.log(ship);
  };
  const handleSubmit = () => {
    console.log("frontend form Data", ship);
    // e.preventDefault();
    // console.log(user);
    fetch("http://localhost:8000/api/add_ship", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify(ship),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status == "success") {
          console.log("message", json.message);
        } else {
          console.log("worker was not added");
        }
      });
    }

      // call api to set or update shipping info

      const singleUser = () => {
        const  user_id =  JSON.parse(localStorage.getItem('user-info')).id

        console.log("user_id", user_id)
    
    
        fetch(`http://localhost:8000/api/get_user/${user_id}`)
          .then((response) => response.json())
          .then((json) => {
              console.log('json',json);
            // setProduct(json.product);
            // setisloading(false);
            if (json.status === 200) {
                                    setShip({
                                        phone: json.a_user.phone,
                                        fname: json.a_user.fname,
                                        lname: json.a_user.lname,
                                        addjsons: json.a_user.addjsons,
                                        suit: json.a_user.suit,
                                        city: json.a_user.city,
                                        country: json.a_user.country,
                                        code: json.a_user.code
                                    })
                                } 
    
          });
    
      }

      useEffect(() => {
        
        singleUser()
        
      }, [])
      

     
    

    //   const axios = require('axios').default;
      
    //   async componentDidMount(){
          
    //       const  user_id =  JSON.parse(localStorage.getItem('user-info')).id

    //      const res = await axios.get(`http://localhost:8000/api/get_user/${user_id}`);
    //                 if (res.data.status === 200) {
    //                     setShip({
    //                         phone: res.data.a_user.phone,
    //                         fname: res.data.a_user.fname,
    //                         lname: res.data.a_user.lname,
    //                         address: res.data.a_user.address,
    //                         suit: res.data.a_user.suit,
    //                         city: res.data.a_user.city,
    //                         country: res.data.a_user.country,
    //                         code: res.data.a_user.code
    //                     })
    //                 } 
     
    //             };
    //call api to set or update shipping info
    // fetch("http://localhost:8000/api/get_ship", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //     Accept: "Application/json",
    //   },
    //   body: JSON.stringify(ship),
    // })
    //   .then((response) => response.json())
    //   .then((shipping) => {
    //     console.log('Getting Shipping info', shipping);
    //     localStorage.setItem(
    //       "shipping-info",
    //       JSON.stringify(shipping.shipping)
    //     );

    //     if (shipping.status == "success") {
    //       console.log("message", shipping.message);
    //     } else {
    //       console.log("shipping details was not retrieved");
    //     }
    //   });


  
//   const shippingInfo = JSON.parse(localStorage.getItem('shipping-info'));

//   const shipping_id = shippingInfo !== null ? shippingInfo.id : JSON.parse(localStorage.getItem('user-info')).id; 
  return (
    <div className="col-lg-8 col-sm-12 shipper">
      <div className="row">
        <h1 className="col-lg-7 mt-4 mb-4 c-inf">Contact Information</h1>
        <div className="col-lg-5">
          <div className="row mt-4 ahaa">
            <h4 className="col-lg-10">
              {" "}
              Already have an account? <a href="#">Log in</a>{" "}
            </h4>
          </div>
        </div>
      </div>

      <input
        type="text"
        name="phone"
        value={ship.phone}
        onChange={handleChange}
        placeholder="Email or mobile phone number"
        className="inpem mt-4  col-lg-12"
      />

      <div className="col-lg-6 mt-2 mb-4 stcc1">
        <div className="row">
          <h4 className="col-lg-10">
            {" "}
            <div className="  col-lg-2  stcc"></div>Keep me up to date on news
            and excluive offers
          </h4>
        </div>
      </div>
      <h1 className="col-lg-7 mt-4 mb-4 c-inf">Shipping address</h1>
      <div className="row">
        <input
          type="text"
          name="fname"
          value={ship.fname}
          onChange={handleChange}
          placeholder="First name (optional)"
          className="inpem col-lg-5 col-sm-10 me-4 ms-2"
        />
        <input
          type="text"
          name="lname"
          value={ship.lname}
          onChange={handleChange}
          placeholder="Last name"
          className="inpem col-lg-5 col-sm-10"
        />
      </div>
      <input
        type="text"
        name="address"
        value={ship.address}
        onChange={handleChange}
        placeholder="Address"
        className="inpem mt-4 col-lg-12"
      />
      <input
        type="text"
        name="suit"
        value={ship.suit}
        onChange={handleChange}
        placeholder="Apartment,suit,e.t.c (optinal)"
        className="inpem mt-4 col-lg-12"
      />
      <input
        type="text"
        name="city"
        value={ship.city}
        onChange={handleChange}
        placeholder="City"
        className="inpem mt-4 col-lg-12"
      />
      <div className="row mt-4 mb-4">
        <input
          type="text"
          name="country"
          value={ship.country}
          onChange={handleChange}
          placeholder="Nigeria"
          className="inpem col-lg-5 col-sm-10 me-4 ms-2"
        />
        <input
          type="text"
          name="code"
          value={ship.code}
          onChange={handleChange}
          placeholder="Postal Code"
          className="inpem col-lg-5 col-sm-10"
        />
      </div>
      <div className="col-lg-3">
        <button
          type="button"
          className="col-lg-12 col-sm-12 mb-4 mt-4 btn  pts1"
          onClick={handleSubmit}
        >
          Update shipping details
        </button>
      </div>
    </div>
  );
}

export default ShippingDetail

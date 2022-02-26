import React, { useContext, useState } from "react";
import { HektoContext } from "../screens/HektoContext";
import "./Filter.css";

function Filter() {
  const storeContext = useContext(HektoContext);
  const copy = JSON.parse(localStorage.getItem("myProducts"));

  const products = storeContext[0];
  const setProducts = storeContext[1];
//   const [data, setData] = useState(copy);
//   const [order, setOrder] = useState("ASC");
  // console.log('my data list',data)

//   sort by price
   const sortByPrice = (e) => {
      let price = copy.products.sort((a, b) => {
        if(e.target.value === 'low'){
          return a.price - b.price;
        }
        else if(e.target.value === 'high'){
          return b.price - a.price;
        }
        else if(e.target.value === 'all'){
          return a.price - b.price;
        }
        else{
          return a.price - b.price;
        }
      });
      console.log('priceList', price);
      setProducts(price)
    }
//   const sorting = (orderBy, col) => {
//     console.log("my data column", col);
//     const new_data = data.products;

//     console.log(new_data);

//     if (orderBy === "ASC") {
//       const sorted = [...new_data].sort((a, b) =>
//         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
//       );
//       console.log(sorted);
//       setData(sorted);
//       setOrder("DSC");
//     }
//     if (orderBy === "DSC") {
//       const sorted = [...new_data].sort((a, b) =>
//         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
//       );
//       setData(sorted);
//       setOrder("ASC");
//     }
//   };
  return (
    <div className="out">
      <div className=" container">
        <div className="row">
          <div className="col-6">
            <p className="ecom">Ecommerce Accessories and Fashion Item</p>
            <p className="ecop">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label child"
                    >
                      Per page
                    </label>
                  </div>
                  <div className="col-6 ">
                    <input
                      type="email"
                      className="form-control inp"
                      id="exampleFormControlInput1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-8   ">
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-4">
                        <p className="child">sort by:</p>
                      </div>

                      <div className="col-8">
                        <select
                          className="form-select form-select-sm mb-3"
                          onChange={sortByPrice}
                          aria-label=".form-select-sm example"
                        >
                          <option selected>sort by:</option>
                          <option
                            name="price"
                            value="low"
                            className="match"
                          >
                            low
                          </option>
                          <option
                            name="price"
                            value="high"
                            className="match"
                          >
                            high
                          </option>
                          <option
                            name="price"
                            value="all"
                            className="match"
                          >
                            all
                          </option>
                          {/* <option onClick={()=> sorting} name='price' value="all" className='match'>Low - High</option> */}
                          {/* <option onClick={()=> sorting} name='price'  className='match'>High-Low</option> */}
                          {/* <option id="3" className='match'>Recommended</option> */}
                        </select>
                      </div>
                      {/* <div className='col-8'>
                                                    <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                                        <option selected>sort by:</option>
                                                        <option onClick={sortByPrice} name='price'  id="low" className='match'>low</option>
                                                        <option onClick={sortByPrice} name='price' id="high" className='match'>high</option>
                                                        <option onClick={sortByPrice} name='price' id="all" className='match'>all</option>
                                                        <option onClick={sortByPrice} name='price' id="all" className='match'>Low - High</option>
                                                        <option onClick={sortByPrice} name='price'  className='match'>High-Low</option>
                                                        {/* <option id="3" className='match'>Recommended</option> */}
                      {/* </select> */}
                      {/* </div> */}
                    </div>
                  </div>
                  <div className=" col-4">
                    <div className="row">
                      <div className="col-6">
                        <p className="child">view:</p>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="rowA col-6">
                            <i class="fas fa-th-large"></i>
                          </div>
                          <div className="rowA col-6">
                            <i class="fas fa-grip-horizontal"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

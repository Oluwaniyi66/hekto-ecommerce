import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useCart } from 'react-use-cart';



function NavBar() {

  const { totalItems } = useCart()
  

  const cartNumber = JSON.parse(localStorage.getItem('react-use-cart'))
    // console.log('my cart no',cartNumber.items.length)
  return (
    <div className="">
      <nav className="top_navbar">
        <div className="topnav_parent container">
          <div className="topnav_child1">
          <li className="nav-item ">
              <a className="nav-link link1 " href="#">
              <i class="far fa-envelope"></i>
              oluwaniyiropo@gmail.com
             
               
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link link1 " href="#">
              <i class="fas fa-phone"></i>
              (+234)8132621797
              
                
              </a>
            </li>
           
          </div>
          <div className="topnav_child2">
            <li className="nav-item dropdown ">
              <a
                className="nav-link  link1 dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Yoruba
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link link1 dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Naira
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    USD
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <a className="nav-link link1" href="#">
                Login
                <i class="far fa-user"></i>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link link1 " href="#">
                Wishlist
                <i class="fas fa-heart"></i>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link link1 " href="#">
               
               <Link to='/cart'>
               
              <i class="fas fa-shopping-cart"></i> <sup>
              { totalItems  }
              </sup>
               </Link>
              
              </a>
            </li>
          </div>
        </div>
      </nav>
      <nav className="navbar nav1 navbar-expand-lg navbar-light ">
        <div className="container-fluid nav1 container">
          <a className="navbar-brand" href="#">
            <h2 className="hek">Hekto</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hm hm1"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item hm1" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active  hm1" aria-current="page" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hm1" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hm1" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  hm1" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link hm1" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 fm"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className=" fasit" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

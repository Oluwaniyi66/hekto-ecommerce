import React from 'react'
import "./Footer.css"
import FooterBottom from './FooterBottom'

function Footer() {
    return (
        <div className='kont'>
            <div className='container'>
                <div className='row '>


                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='col-lg-3 hek'><h1>Hekto</h1></div>
                        <div>
                            <form className="row">
                                <div className='col-lg-8'>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="enter email address"
                                        aria-label="email"
                                    />
                                </div>
                                <button className="btn btn-color col-lg-4" type="submit">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                        <div className='col-lg-4 mx-2 my-2 ci'><p>Contact Info</p></div>
                        <div className='col-lg-12 ci'><p>14,Onigbongbo Street, Ketu, Lagos </p></div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='cd col-lg-6'><h3>Categories</h3></div>
                        <div className='ci'><p>Laptops & Computers</p> </div>
                        <div className='ci'><p>Cameras & Photography</p></div>
                        <div className='ci'><p>Smart Phones & Tablets</p></div>
                        <div className='ci'><p>Video Games & Consoles</p></div>
                        <div className='ci'><p>Waterproof & Headphones</p></div>
                    </div>

                    <di className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='cd col-lg-10'><h3>Customer Care</h3></div>
                        <div className='ci'><p>My Account</p> </div>
                        <div className='ci'><p>Discount</p></div>
                        <div className='ci'><p>Returns</p></div>
                        <div className='ci'><p>Orders History</p></div>
                        <div className='ci'><p>Order Tracking</p></div>
                    </di>
                    <di className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='cd col-lg-6'><h3>Pages</h3></div>
                        <div className='ci'><p>Blog</p> </div>
                        <div className='ci'><p>Browse the Shop</p></div>
                        <div className='ci'><p>Category</p></div>
                        <div className='ci'><p>Pre-Built Pages</p></div>
                        <div className='ci'><p>Visual Composer Elements</p></div>
                        <div className='ci'><p>WooCommerce Pages</p></div>
                    </di>

                </div>
            </div>
            
           
        </div>

    )
}

export default Footer

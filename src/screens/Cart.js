import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import ShopppingCart from '../components/ShopppingCart'
import './Cart.css'

function Cart() {
    return (
        <div>
            <Header title="Shopping Cart" />
            <Filter />
            <div className='container'>
               <ShopppingCart/>
            </div>
           <FooterImage/>
           <Footer/>
           <FooterBottom/>
        </div>
    )
}

export default Cart

import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import ShopppingCart from '../components/ShopppingCart'
import './Cart.css'

function Cart() {
    const myCartProduct = JSON.parse(localStorage.getItem('react-use-cart'))
    console.log('my child cart',myCartProduct)

    return (
        <div>
            <Header title="Shopping Cart" />
            <Filter />
            <div className='container'>
                {
            myCartProduct.items.map((myCart)=>(
            
               <ShopppingCart
               myCart = {myCart}
               />
            ))
}
            </div>
           <FooterImage/>
           <Footer/>
           <FooterBottom/>
        </div>
    )
}

export default Cart

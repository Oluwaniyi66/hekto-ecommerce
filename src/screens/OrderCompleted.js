import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import Order from '../components/Order'
import "./OrderCompleted.css"
function OrderCompleted() {
    
    return (
        <div>
            <Header title="Order Completed" />
            <Filter />
            <div className='container'>
                
                <Order/>
            </div>
            <FooterImage />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default OrderCompleted

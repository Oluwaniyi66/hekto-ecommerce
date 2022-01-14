import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import ShippingCard from '../components/ShippingCard'
import ShippingDetail from '../components/ShippingDetail'
import './Shipping.css'

function Shipping() {
    
    return (
        <div>
            <Header title="Hekto Demo" />
            <Filter />
            <div className='container'>
                
                <div className='row'>

                    <ShippingDetail />



                    <ShippingCard />

                </div>
            </div>
            <FooterImage />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Shipping

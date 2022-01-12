import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import ProductDetail from '../components/ProductDetail'

function ProductsDetails() {
   
    return (
        <div>
            <Header title="Product Details"/>
            <Filter/>
            
                   <ProductDetail/>
        
            <FooterImage/>
            <Footer/>
            <FooterBottom/>
        </div>
    )
}

export default ProductsDetails

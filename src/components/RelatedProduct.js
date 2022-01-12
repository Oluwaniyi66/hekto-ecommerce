import React from 'react'
import "./ProductDetail.css"

function RelatedProduct({id,rp_Image,rp_title,rp_price}) {
    return (
        
            <div className='col-lg-3'>
           
                <div className='rp-img'>
                    <img src={rp_Image} alt="" />
                </div>
                <div className='row'>
                    <h4 className='col-lg-7 mfw'>{rp_title}</h4>
                    <div className='col-lg-5'>
                        <div className="row">
                        <div className='col-lg-3'>  <i class="fas fa-star"></i></div>
                        <div className='col-lg-3' >  <i class="fas fa-star"></i></div>
                        <div className='col-lg-3'>  <i class="fas fa-star"></i></div>
                        <div className='col-lg-3'>  <i class="fas fa-star"></i></div>
                        </div>
                       
                    </div>
                </div>
                <h4 className='col-lg-2 mfw1'>{rp_price}</h4>
            </div>
           
    )
}

export default RelatedProduct

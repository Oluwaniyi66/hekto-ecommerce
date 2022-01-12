import React from 'react'
import "./GridProduct.css"

function GridProduct({id, name, price,discount, image}) {
    return (
        <div id='grid-card'>
            <div className='grid-img-section'>
                <div className='grid-img'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='grid-card-text'>
                <div className='grid-card-title'>
                    <h2>{name}</h2>
                </div>
                <div className='grid-icon-section'>
                    <div className='grid-icon grid-icon1'></div>
                    <div className='grid-icon grid-icon2'></div>
                    <div className='grid-icon grid-icon3'></div>
                </div>
                <div className='grid-price-section'>
                    <div className='grid-price'>
                        <h4>{ price}</h4>
                    </div>
                    <div className='grid-discount'>
                        <h4> {discount}</h4>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default GridProduct

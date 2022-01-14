import React from 'react'
import "./ShipCardsm.css"

function ShipCardsm({id,image,title,color,size,price}) {
    return (
        <div className='row'>
            <div className='col-lg-8'>

                <div className='row'>
                    <div className='col-lg-4 shc'><img src={image} alt="" /></div>
                    <div className='col-lg-8'>
                        <h4 className='utc'>{title}</h4>
                        <h4 className='ccb row'> <h5 className='ccr col-lg-3'>Color: </h5> <h6 className='col-lg-3'>{color}</h6></h4>
                        <h4 className='ccb row'> <h5 className='ccr col-lg-3'>Size:</h5> <h6 className='col-lg-3'>{size}</h6></h4>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>


                <div className='row'>

                    <h4 className='prct mt-4'>{price}</h4>
                </div>

            </div>
        </div>
    )
}

export default ShipCardsm

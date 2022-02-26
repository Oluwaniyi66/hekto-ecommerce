import React from 'react'
import "./ShipCardsm.css"

function ShipCardsm({item}) {

    return (
        <div className='row'>
            <div className='col-lg-8'>

                <div className='row'>
                    <div className='col-lg-4 shc'><img src={`http://127.0.0.1:8000/images/${item.p_image}`} alt="" /></div>
                    <div className='col-lg-8'>
                        <h4 className='utc'>{item.name}</h4>
                        <h4 className='ccb row'> <h5 className='ccr col-lg-3'>Color: </h5> <h6 className='col-lg-3'>red</h6></h4>
                        <h4 className='ccb row'> <h5 className='ccr col-lg-3'>Size:</h5> <h6 className='col-lg-3'>xl</h6></h4>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>


                <div className='row'>

                    <h4 className='prct mt-4'>{item.price}</h4>
                </div>

            </div>
        </div>
    )
}

export default ShipCardsm

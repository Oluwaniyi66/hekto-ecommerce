import React from 'react'
import ShipCardsm from './ShipCardsm'
import "./ShippingCard.css"

function ShippingCard() {
    const ship = [
        {
            'id': '001',
            'image': './Rectangle 34.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        },
        {
            'id': '002',
            'image': './item2.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        },
        {
            'id': '003',
            'image': './item3.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        },
        {
            'id': '004',
            'image': './watch1.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        }
    ]
   
    return (

        <div className='col-lg-4 col-sm-10'>
            <div className=''>
            {
                            ship.map((item) => (

                                <ShipCardsm

                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    color={item.color}
                                    size={item.size}
                                    price={item.price}
                                />
                            ))
                        }
                  
                 
            </div>
            <div className='col-lg-12'>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-2 mt-2 mx-1 ctss'>Subtotals:</h4>
                                <h4 className='col-lg-8 mt-2 ctrs'>£219.00</h4>
                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-2 mt-2 mx-1 ctss'>Total:</h4>
                                <h4 className='col-lg-8 mt-2 ctrs'>£325.00</h4>
                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>
                                <div className='col-lg-12 stcc1'>  <div className='mx-3  stcc'></div> <h4> Shipping & taxes calculated at checkout</h4></div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <div className='mx-4 col-lg-10 mb-4 mt-4 btn pts'>Proceed to submit</div>
                            </div>
                        </div>
                    </div>

        </div>
    )
}

export default ShippingCard

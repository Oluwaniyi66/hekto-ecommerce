import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
import './ShoppingCart.css'
function ShopppingCart({myCart}) {
    const {  updateItemQuantity, totalItems ,totalUniqueItems, quantity,item, cartTotal } = useCart();
    const [watch, setWatch] = useState(true)

    return (
      
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <h1 className='mb-3 scp'>Product</h1>
                            <div className='row'>
                                <div className='col-lg-4'><img src={`http://127.0.0.1:8000/images/${myCart.p_image}`} alt="" /></div>
                                <div className='col-lg-8'>
                                    <h4 className='utc'>{myCart.name}</h4>
                                    <h4 className='ccb row'> <h5 className='ccr col-lg-3'>Color:</h5> <h6 className='col-lg-3'>Brown</h6></h4>
                                    <h4 className='ccb row'> <h5 className='ccr col-lg-3'>Size:</h5> <h6 className='col-lg-3'>XL</h6></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='row'>

                                <div className='col-lg-4'>
                                    <h1 className='mb-3 scp1'>Price</h1>
                                    <h4 className='prct'>${myCart.price}</h4>
                                </div>
                                <div className='col-lg-4'>
                                    <h1 className='mb-3 scp1'>Quantity</h1>
                                    <div className='row col-lg-8 mx-4 q-col'>
                                        <div className='col-lg-4'><i onClick={() => updateItemQuantity(myCart.id, myCart.quantity - 1)} class="fas fa-minus"></i></div>
                                        <h4 className='col-lg-4 q-h4'>{myCart.quantity  }</h4>
                                        <div className='col-lg-4'><i onClick={() => updateItemQuantity(myCart.id, myCart.quantity + 1)} class="fas fa-plus"></i></div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <h1 className='mb-3 scp1'>Total</h1>
                                    <h4 className='prct'>${myCart.price * myCart.quantity}</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />
                    
                </div>
                

            </div>

        </div>
    )
}

export default ShopppingCart

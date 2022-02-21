import React from 'react'
import { useCart } from 'react-use-cart';
import './ShoppingCart.css'
function ShopppingCart({myCart}) {
    const {  updateItemQuantity} = useCart();

    return (
      
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9'>
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
                                        <div className='col-lg-4'><i onClick={() => updateItemQuantity(myCart.id, item.quantity - 1)} class="fas fa-minus"></i></div>
                                        <h4 className='col-lg-4 q-h4'>2</h4>
                                        <div className='col-lg-4'><i class="fas fa-plus"></i></div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <h1 className='mb-3 scp1'>Total</h1>
                                    <h4 className='prct'>$219.00</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className='row'>

                        <div className='col-lg-8'>
                            <div className='row'>

                                <div className='mx-4 col-lg-3 mb-4 mt-4 btn pts1'>Update Cart</div>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-4'>
                            <div className='row'>
                                <div className='col-lg-6'></div>
                                <div className='col-lg-6 mb-4 btn pts1'>Clear Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>

                    <div className='col-lg-12'>
                        <h1 className='mb-3 scp1'>Cart Total</h1>
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
                    <div className='col-lg-12 mt-4'>
                        <h1 className='mb-3 scp1'>Calculate Shopping</h1>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-2 mt-2 mx-1 ctss5'>Bangladesh</h4>

                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-8 mt-2 mx-1 ctss5'>Mirpur Dhaka - 1200</h4>

                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-8 mt-2 mx-1 ctss5'>Postal Code</h4>

                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <div className='mx-4 col-lg-8 mb-4 mt-4 btn pts1'>Calculate Shipping</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShopppingCart

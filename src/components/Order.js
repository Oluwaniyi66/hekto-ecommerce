import React from 'react'
import './Order.css'
function Order() {
    return (
        <div className='row'>

            <div className='col-lg-2 col-sm-10 order-img'>

                <img src="./clock.png" className='' alt="" />

            </div>
            <div className='col-lg-6 col-md-8 col-sm-10 mb-4 myCard'>
                <div className='col-lg-12'>

                    <img src="./checked.png" className='mt-4' alt="" />
                    <div className='my-4'>
                        <h1 className='order-head'>Your Order Is Completed! </h1>
                        <h4 className='order-head1'>Thank you for your order! Your order is being processed and will
                            be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</h4>

                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 btn log-bt'>Continue Shopping</div>
                </div>

            </div>

            <div className='col-lg-2 mt-4 col-sm-10 order-img1'>

                <img src="./checklist 1.png" className='' alt="" />

            </div>
        </div>
    )
}

export default Order

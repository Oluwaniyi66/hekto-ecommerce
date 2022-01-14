import React from 'react'
import './ShippingDetail.css'
function ShippingDetail() {
    return (
        <div className='col-lg-8 col-sm-12 shipper'>
            <div className='row'>
                <h1 className='col-lg-7 mt-4 mb-4 c-inf'>Contact Information</h1>
                <div className='col-lg-5'>
                    <div className='row mt-4 ahaa'>
                        <h4 className='col-lg-10'> Already have an account?  <a href="#">Log in</a> </h4>

                    </div>
                </div>

            </div>

            <input type="text" placeholder='Email or mobile phone number' className='inpem mt-4  col-lg-12' />

            <div className='col-lg-6 mt-2 mb-4 stcc1'>
                <div className='row'>


                    <h4 className='col-lg-10'> <div className='  col-lg-2  stcc'></div>Keep me up to date on news and excluive offers</h4>
                </div>
            </div>
            <h1 className='col-lg-7 mt-4 mb-4 c-inf'>Shipping address</h1>
            <div className='row'>
                <input type="text" placeholder='First name (optional)' className='inpem col-lg-5 col-sm-10 me-4 ms-2' />
                <input type="text" placeholder='Last name' className='inpem col-lg-5 col-sm-10' />
            </div>
            <input type="text" placeholder='Address' className='inpem mt-4 col-lg-12' />
            <input type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)' className='inpem mt-4 col-lg-12' />
            <input type="text" placeholder='City' className='inpem mt-4 col-lg-12' />
            <div className='row mt-4 mb-4'>
                <input type="text" placeholder='Bangladesh' className='inpem col-lg-5 col-sm-10 me-4 ms-2' />
                <input type="text" placeholder='Postal Code' className='inpem col-lg-5 col-sm-10' />
            </div>
            <div className='col-lg-3'>
            <div className='col-lg-12 col-sm-12 mb-4 mt-4 btn pts1'>Continue Shipping</div>

            </div>
        </div>
    )
}

export default ShippingDetail

import React from 'react'
import './RegCard.css'
function RegCard() {
    return (
        <div className='col-lg-4 col-md-8 col-sm-10 mb-4 myCard'>

            <div className='my-4'>
                <h1 className='log-head'>Register</h1>
                <h4 className='log-head1'>Please register using account detail bellow.</h4>

            </div>
            <input type="text" className='col-lg-10 col-sm-10 log-inp' placeholder='Email Address' />
            <input type="text" className='col-lg-10 col-sm-10 log-inp' placeholder='Password' />
            <div className='col-lg-10 col-md-10 col-sm-10 btn log-bt'>Sign Up</div>
            <h4 className='log-head1 my-4'>already have an Account? <a href="/login">Log in</a> </h4>




        </div>
    )
}

export default RegCard

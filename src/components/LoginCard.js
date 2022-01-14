import React from 'react'
import './LoginCard.css'
function LoginCard() {
    return (
        <div className='col-lg-4 col-md-8 col-sm-10 mb-4 myCard'>

            <div className='my-4'>
                <h1 className='log-head'>Login</h1>
                <h4 className='log-head1'>Please login using account detail bellow.</h4>

            </div>
            <input type="text" className='col-lg-10 col-sm-10 log-inp' placeholder='Email Address' />
            <input type="text" className='col-lg-10 col-sm-10 log-inp' placeholder='Password' />
            <h4 className='col-lg-6 col-sm-10 mx-2 log-head2'>Forgot your password?</h4>
            <div className='col-lg-10 col-md-10 col-sm-10 btn log-bt'>Sign In</div>
            <h4 className='log-head1 my-4'>Don’t have an Account? <a href="#">Create account</a> </h4>




        </div>
    )
}

export default LoginCard

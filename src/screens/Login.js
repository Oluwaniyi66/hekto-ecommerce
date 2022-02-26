import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import LoginCard from '../components/LoginCard'
import "./Login.css"
function Login() {
    
    return (
        <div>
            <Header title="My Account" />
            <div className='container'>
                
                <LoginCard/>
            </div>
            <FooterImage />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Login

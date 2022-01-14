import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import RegCard from '../components/RegCard'
import "./Register.css"
function Register() {
    
    return (
        <div>
            <Header title="My Account" />
            <Filter />
            <div className='container'>
                
                <RegCard/>
            </div>
            <FooterImage />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Register

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './LoginCard.css'
function LoginCard() {
    const navigate = useNavigate()
    const [sign, setSign] = useState({

        'email':'',
        'password':''
    })

    const handleChange = (e) => {
        setSign(
            {...sign,[e.target.name]:e.target.value}
        )
    }

    const handleSubmit = () => {
        console.log('frontend form Data', sign)
        // e.preventDefault();
        // console.log(user);
        fetch('http://localhost:8000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(sign)
        })
        .then(response => response.json())
        .then( (data)  =>{

            // if(json.status == 'success'){
            //     console.log('message',json.message)
            // }
            // else{
            //     console.log("user login successfully")
            // }

            
                console.log(data);
                if (data.status === "error" || data.errors) {
                    toast('Error', data.message, 'error')
                    return;
                } else if( data.status === "success"){
                 toast.success('Login Successful')
                    // localStorage.setItem("token", JSON.stringify(data.token));
                    localStorage.setItem("user-info", JSON.stringify(data.data));
                    //check local storage if there is any intended url 
                    if (localStorage.getItem('intended1') ){
                        let intendedUrl = JSON.parse(localStorage.getItem('intended1'))
                        console.log('Intended Url', intendedUrl)
                        navigate(intendedUrl)
                    }else{
                        navigate('/list')
                    }
                }
            

        }

        )
    }
    return (
        <div className='col-lg-4 col-md-8 col-sm-10 mb-4 myCard'>

            <div className='my-4'>
                <h1 className='log-head'>Login</h1>
                <h4 className='log-head1'>Please login using account detail bellow.</h4>

            </div>
            <input name='email' value={sign.email}  onChange={handleChange} type="email" className='col-lg-10 col-sm-10 log-inp' placeholder='Email Address' />
            <input type="password" name='password' value={sign.password} onChange={handleChange} className='col-lg-10 col-sm-10 log-inp' placeholder='Password' />
            <button type='button' onClick={handleSubmit}  className='col-lg-10 col-md-10 col-sm-10 btn log-bt'>Sign In </button>
            <h4 className='col-lg-6 col-sm-10 mx-2 log-head2'>Forgot your password?</h4>
            <h4 className='log-head1 my-4'>Don’t have an Account?
            <Link to={'/register'}>
             Create account
            
            </Link>
             
             </h4>




        </div>
    )
}

export default LoginCard

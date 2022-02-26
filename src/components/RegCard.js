import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RegCard.css'
function RegCard() {
    const [log, setLog] = useState({

        'name':'',
        'email':'',
        'password':''

    })
    const handleChange = (e) =>{
        setLog(
            {...log,[e.target.name]: e.target.value}
        );
    }

    const handleSubmit = () => {
        console.log('frontend form Data', log)
        // e.preventDefault();
        // console.log(user);
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(log)
        })
        .then(response => response.json())
        .then( json =>{

            if(json.status == 'success'){
                console.log('message',json.message)
            }
            else{
                console.log("user was not registered")
            }
        }

        )
    }
    return (
        <div className='col-lg-4 col-md-8 col-sm-10 mb-4 myCard'>

            <div className='my-4'>
                <h1 className='log-head'>Register</h1>
                <h4 className='log-head1'>Please register using account detail bellow.</h4>

            </div>
            <input name='name' value={log.name} onChange={handleChange} type="text" className='col-lg-10 col-sm-10 log-inp' placeholder='Name' />
            <input name='email' value={log.email} onChange={handleChange} type="email" className='col-lg-10 col-sm-10 log-inp' placeholder='Email Address' />
            <input name='password' value={log.password} onChange={handleChange} type="password" className='col-lg-10 col-sm-10 log-inp' placeholder='Password' />
            <button type='button' onClick={handleSubmit} className='col-lg-10 col-md-10 col-sm-10 btn log-bt'>Sign Up</button>
            <h4 className='log-head1 my-4'>already have an Account? 
            <Link to={'/login'}>
            Log in
            
            </Link>
            </h4>




        </div>
    )
}

export default RegCard

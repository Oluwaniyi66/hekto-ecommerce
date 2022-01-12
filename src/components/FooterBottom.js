import React from 'react'
import "./Footer.css"

function FooterBottom() {
    return (
        <div>
             <div className='row ld'>
                
                <div className='col-lg-6 '>
                    <div className=' my-2 ld1'><p>©Love Doctor - All Rights Reserved</p></div>

                </div>
                <div className='row col-lg-6'>
                    <div className='col-lg-3 my-2'>
                        <a href="#"> <i class="fab fa-facebook"></i></a>
                        <a href="#">  <i class="fab fa-twitter-square"></i></a>
                        <a href="#"> <i class="fab fa-instagram-square"></i></a>
                       
                      
                       
                    </div>
                    {/* <div className='col-lg-1 my-2'><i class="fab fa-twitter-square"></i></div>
                    <div className='col-lg-1 my-2'><i class="fab fa-instagram-square"></i></div> */}
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
 
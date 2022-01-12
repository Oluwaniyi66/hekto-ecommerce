import React from 'react'
import "./Header.css";

function Header({title}) {
    return (
        <div>
            <div className='grid_parent'>
                <div className=' container'>
                    <div className='col-lg-4 col-md-8 col-sm-12 def '>

                        <p className=''>
                            {title}
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='row'>

                            <div className='col-4 pag'>
                                <p>Home.Pages.</p>
                            </div>

                            <div className='col-7'>
                                <p className='fau'>
                                    {title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Header

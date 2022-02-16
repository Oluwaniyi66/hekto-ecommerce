import React from 'react'

function HomeTc({tp}) {
  return (
    <div className='col-lg-12 me-3 tc-box'>
        <div className='tc-image'>
            <div className='tc-img'>
                <img src={tp.image} alt="" />
            </div>
        </div>

        <div className='tc-h1'>
            <h1>{tp.name}</h1>
        </div>
        <div className='tc-h2'>
            <h2>${tp.price}</h2>
        </div>
        
    </div>
  )
}

export default HomeTc
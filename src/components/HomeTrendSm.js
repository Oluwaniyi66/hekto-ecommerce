import React from 'react'

function HomeTrendSm({small}) {
  return (
    <div className='d-flex  mb-4'>
        <div className='htsm-image me-2'>
            <div className='htsm-img'>
                <img src={`http://127.0.0.1:8000/images/${small.p_image}`} alt="" />
            </div>
        </div>

        <div>
            <div className='htsm-h3'> <h3>{small.name}</h3> </div>
            <div className='htsm-h4'><h4>${small.price}</h4></div>
        </div>

    </div>
  )
}

export default HomeTrendSm
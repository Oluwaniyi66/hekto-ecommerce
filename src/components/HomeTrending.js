import React from 'react'

function HomeTrending({trending}) {
  return (
    <div className='col-lg-12 htg-box me-2 my-3'>
        <div className="col-lg-11 htg">

            <div className='htg-img ms-2 my-2'>
                <img src={trending.image} alt="" />
            </div>

        </div>
        <div className="col-lg-12">
            <div className='htg-p1'> <p>{trending.name}</p> </div>
            <div className='col-lg-12 d-flex htg-h1'>
                <h1 className='col-lg-6 me-2'>${trending.discount} </h1>
                <h2 className='col-lg-6'>${trending.price}</h2>
            </div>

        </div>

    </div>
  )
}

export default HomeTrending
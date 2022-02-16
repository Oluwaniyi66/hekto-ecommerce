import React from 'react'

function HomeShopex({shop}) {
  return (
    <div className='col-lg-12 shp-box mb-5 me-3'>

        <div className='col-lg-12 mt-4 hm-sh d-flex justify-content-center'>
            <div className=' hm-shp-img '>
                <img src={shop.image} alt="" />
            </div>
            
        </div>
        <div className='col-lg-12 hm-shp-h1'>
            <h4>{shop.title}</h4>

        </div>
        <div className='col-lg-12 hm-shp-h2'>
            <p>{shop.description}</p>
        </div>

    </div>
  )
}

export default HomeShopex
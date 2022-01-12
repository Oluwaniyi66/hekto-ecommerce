import React from 'react'
import "./ListProducts.css"

function ListProducts({id, name, price,discount, image, description}) {
    return (
        <div className='container'>
            <div className='dont'>
                <div className='row mx-1 my-1'>

                    <div className='col-lg-4 col-sm-10 list-img-section '>
                        <div className='grid-img col-lg-8 mt-1'> <img src={image} alt="" /> </div>
                    </div>
                    <div className='col-lg-8 col-sm-10'>
                        <div className='row'>
                            <div className='col-lg-3 tsit'><h4>{name}</h4> </div>
                            <div className='row col-lg-3'>
                                <div className='grid-icon mx-1 mt-2 grid-icon1'></div>
                                <div className='grid-icon mx-1 mt-2 grid-icon2'></div>
                                <div className='grid-icon mx-1 mt-2 grid-icon3'></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-1 grid-price'>
                                <h4>{discount}</h4>
                            </div>
                            <div className='col-lg-1 grid-discount'>
                                <h4>{price}</h4>
                            </div>
                            <div className='col-lg-2 mb-2'>
                                <div className='row'>
                                    <div className='col-lg-2 s-color'>

                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className='col-lg-2 s-color'>

                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className=' col-lg-2 s-color'>

                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className='col-lg-2 s-color'>

                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className='col-lg-2'>

                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-8   t-word' > <h4>{description}</h4> </div>
                        <div className='row '>
                            <div className='col-lg-1 mx-1 my-1'><i class="fas fa-shopping-cart"></i></div>
                            <div className='col-lg-1  mx-1 my-1'><i class="far fa-heart"></i></div>
                            <div className='col-lg-1  mx-1 my-1'><i class="fas fa-search-plus"></i></div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default ListProducts

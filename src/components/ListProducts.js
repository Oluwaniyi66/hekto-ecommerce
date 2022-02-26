import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { HektoContext } from '../screens/HektoContext';
import "./ListProducts.css"

function ListProducts({item}) {
    const storeContext = useContext(HektoContext)
 const Product = storeContext[14]
 const checkAndNotify = storeContext[17] 
 const searchTerm = storeContext[18] 
 const setSearchTerm = storeContext[19] 

    const { id } = useParams()
 const {addItem} = useCart();
 const { updateItem } = useCart();
 const { removeItem } = useCart();
    return (
        <div className='container'>
            <div className='dont'>
                <div className='row mx-1 my-1'>
                    
                
                    <div className='col-lg-4 col-sm-10 list-img-section '>

                        <div className='grid-img col-lg-8 mt-1'> 
                        <Link to={`/productdetail/${item.id}`}>

                        
                        <img src={`http://127.0.0.1:8000/images/${item.p_image}`} alt="" /> 
                        </Link>
                        
                        </div>
                    </div>
                    <div className='col-lg-8 col-sm-10'>
                        <div className='row'>   
                            <div className='col-lg-3 tsit'><h4>{item.name}</h4> </div>
                            <div className='row col-lg-3'>
                                <div className='grid-icon mx-1 mt-2 grid-icon1'></div>
                                <div className='grid-icon mx-1 mt-2 grid-icon2'></div>
                                <div className='grid-icon mx-1 mt-2 grid-icon3'></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-1 grid-price'>
                                <h4>{item.discount}</h4>
                            </div>
                            <div className='col-lg-1 grid-discount'>
                                <h4>{item.price}</h4>
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
                        <div className='col-lg-8   t-word' > <h4>{item.l_desc}</h4> </div>
                        <div className='row '>
                            <div className='col-lg-1 mx-1 my-1'  ><i onClick={()=> checkAndNotify(item)} class="fas fa-shopping-cart"></i></div>
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

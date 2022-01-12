import React from 'react'
import "./ProductDetail.css"
import RelatedProduct from './RelatedProduct'

function ProductDetail() {

    //     'image1':'',image2,image3,Image,name,rating,price,
    // discount,description, title,lg_description,sm_title,sm_description,rp_Image,rp_title,rp_price

    const relatedProduct = [
        {
        
            'id': '001',
            'rp_Image':'./Rectangle 128.png',
            'rp_title':'Mens Fashion Wear',
            'rp_price':' $43.00'
    },
        {
        
            'id': '002',
            'rp_Image':'./Rectangle 133.png',
            'rp_title':'Women’s Fashion',
            'rp_price':' $67.00'
    },
        {
        
            'id': '002',
            'rp_Image':'./Rectangle 133.png',
            'rp_title':'Women’s Fashion',
            'rp_price':' $67.00'
    },
        {
        
            'id': '003',
            'rp_Image':'./Rectangle 130.png',
            'rp_title':'Wolx Dummy Fashion',
            'rp_price':' $53.00'
    },
        {
        
            'id': '004',
            'rp_Image':'./Rectangle 131.png',
            'rp_title':'Top Wall Digital Clock',
            'rp_price':' $55.00'
    }
]
    return (
        <div className='container'>
            <div className=''>

                <div className='card plc py-10 me-10 my-5'>
                    <div className='row mx-3 my-3'>
                        <div className='col-lg-2 pd-imgs-section'>
                            <div className='my-2 pd-img'> <img src="./Rectangle 134.png" alt="" /> </div>
                            <div className='my-2 pd-img'> <img src="./Rectangle 136.png" alt="" /> </div>
                            <div className='pd-img'> <img src="./Rectangle 137.png" alt="" /> </div>
                        </div>
                        <div className='col-lg-5'>
                            <div> <img src="./Rectangle 138.png" alt="" /> </div>
                        </div>
                        <div className='col-lg-5'>
                            <div>
                                <div className='col-lg-10 tsit1'> <h4>Playwood arm chair</h4></div>
                                <div className='col-lg-8 row'>

                                    <div className='col-lg-1'>  <i class="fas fa-star"></i></div>
                                    <div className='col-lg-1' >  <i class="fas fa-star"></i></div>
                                    <div className='col-lg-1'>  <i class="fas fa-star"></i></div>
                                    <div className='col-lg-1'>  <i class="fas fa-star"></i></div>
                                    <div className='col-lg-3'>  <h4>(22)</h4></div>


                                </div>
                                <div className='row '>
                                    <div className='col-lg-2 cr  grid-price'>
                                        <h4>$32</h4>
                                    </div>
                                    <div className='col-lg-2 cr1 grid-discount'>
                                        <h4>$45</h4>
                                    </div>
                                </div>
                                <div className='col-lg-2 cr'> <h4>Color</h4></div>
                                <div className='t-word1'><h4>This chair has no idea of bending or rotting and it's very strong</h4></div>
                                <div>
                                    <div className='row'>
                                        <div className='col-lg-6 cr3'>
                                            <h4>Add To cart</h4>

                                        </div>
                                        <div className='col-lg-3'>
                                            <i class="fas fa-heart"></i>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 cr'> <h4>Categories</h4></div>
                                <div className='col-lg-2 cr'> <h4>Tags</h4></div>
                                <div className='row'>
                                    <div className='col-lg-2 cr'> <h4>Share</h4></div>
                                    <div className='row col-lg-3'>

                                        <div className='col-lg-2'>
                                            <a href="#"> <i class="fab fa-facebook"></i></a>

                                        </div>
                                        <div className='col-lg-2'>
                                            <a href="#">  <i class="fab fa-twitter-square"></i></a>

                                        </div>
                                        <div className='col-lg-2'>
                                            <a href="#"> <i class="fab fa-instagram-square"></i></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='beck'>

                <div className='container'>

                    <div className='mb-5'>
                        <div className='row my-4 col-lg-6'>
                            <h4 className='col-lg-3 desc'>Description</h4>
                            <h4 className='col-lg-5 af'>Additional Info</h4>
                            <h4 className='col-lg-2 af'>Reviews</h4>
                            <h4 className='col-lg-2 af'>Video</h4>
                        </div >


                        <h4 className='col-lg-2 af1'>Varius tempor.</h4>
                        <h4 className='af2'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel
                            sed et eleifend habitasse amet.
                            Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                            Velit consectetur neque, elit, aliquet.
                            Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
                            Magna eget faucibus cras justo,
                            tortor sed donec tempus. Imperdiet consequat,
                            quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec.
                            Dui, massa viverr .</h4>
                        <h4 className='col-lg-2 af1'> More details</h4>
                        <h4 className='af2'><i class="fas fa-arrow-right"></i> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                            nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</h4>
                        <h4 className='af2'><i class="fas fa-arrow-right"></i> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                            nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</h4>
                        <h4 className='af2'><i class="fas fa-arrow-right"></i> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                            nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</h4>
                        <h4 className='af2'><i class="fas fa-arrow-right"></i> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                            nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</h4>


                    </div>

                </div>
            </div>
            <div className=''>
                <h1 className='col-lg-4 rp'>Related Products</h1>
              
                   <div className="row">
                   {
                            relatedProduct.map((item)=>(

                                <RelatedProduct 
                                id ={item.id}
                                rp_Image={item.rp_Image}
                                rp_title={item.rp_title}
                                rp_price={item.rp_price}

                                />
                            ))

                    }
                   
                </div>


            </div>
        </div>
    )
}

export default ProductDetail

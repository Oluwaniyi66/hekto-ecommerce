import React from 'react'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import ListProducts from '../components/ListProducts'

function List() {
    const listProducts = [
        {
        'id': '001',
        'name': 'Circle Chair',
        'price': '$20',
        'discount': '$15',
        'image': './list-images/list-image1.png',
        'description':'Three sitter is a very good and affordable chair for singles and married couples. This has many buyers compared to other products'


    },
        {
        'id': '002',
        'name': 'Round Chair',
        'price': '$25',
        'discount': '$20',
        'image': './list-images/list-image2.png',
        'description':'Three sitter is a very good and affordable chair for singles and married couples. This has many buyers compared to other products'



    },
        {
        'id': '003',
        'name': 'Kitchen Chair',
        'price': '$30',
        'discount': '$25',
        'image': './list-images/list-image3.png',
        'description':'Three sitter is a very good and affordable chair for singles and married couples. This has many buyers compared to other products'



    },
        {
        'id': '004',
        'name': 'Dining Chair',
        'price': '$40',
        'discount': '$35',
        'image': './list-images/list-image4.png',
        'description':'Three sitter is a very good and affordable chair for singles and married couples. This has many buyers compared to other products'



    },
        {
        'id': '005',
        'name': 'Balcony Chair',
        'price': '$50',
        'discount': '$45',
        'image': './list-images/list-image5.png',
        'description':'Three sitter is a very good and affordable chair for singles and married couples. This has many buyers compared to other products'



    },
        {
        'id': '005',
        'name': 'Office Chair',
        'price': '$60',
        'discount': '$55',
        'image': './list-images/list-image6.png',
        'description':'Three sitter is a very good and affordable chair for singles and married couples. This has many buyers compared to other products'



    }
    
]
    return (
        <div>
            <Header title="Shop List"/>
            <Filter/>
            <div className='container'>
                <div className='row'>
                    {
                        listProducts.map((item)=>
                        (

                            <ListProducts
                            id = {item.id}
                            name = {item.name}
                            price={item.price}
                            discount={item.discount}
                            image={item.image}
                            description={item.description}
                            />
                        )
                        
                        )

                    }
                </div>
            </div>
            <FooterImage/>
            <Footer/>
            <FooterBottom/>
        </div>
    )
}

export default List

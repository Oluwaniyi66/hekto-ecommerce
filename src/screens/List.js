import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import FooterImage from '../components/FooterImage'
import Header from '../components/Header'
import ListProducts from '../components/ListProducts'
import { HektoContext } from './HektoContext'

function List() {
    const storeContext = useContext(HektoContext)

 const products = storeContext[0]
 const isloading = storeContext[2]

 const searchTerm = storeContext[18] 
 const setSearchTerm = storeContext[19]
console.log('my home context content', products)
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
            <Filter />
            <div className='container'>
                <div className='row'>
                    {
                        products.filter((item) => {
                            console.log('my item', item)
                            if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return item
                            } else if ( searchTerm == ""){
                                    return item
                            }
                        }).map((item)=>
                        (

                           
                                <ListProducts
                            item={item}
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

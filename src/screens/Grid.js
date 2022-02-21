import React from 'react'
import { useContext } from 'react';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import FooterImage from '../components/FooterImage';
import GridProduct from '../components/GridProduct';
import Header from '../components/Header';

import "./Grid.css";
import { HektoContext } from './HektoContext';

function Grid() {
    const storeContext = useContext(HektoContext)

 const products = storeContext[0]
 const isloading = storeContext[2]
console.log('my home context content', products)

    const gridProducts = [
        {
        'id': '001',
        'name': 'Circle Chair',
        'price': '$20',
        'discount': '$15',
        'image': './img/image 9.png'


    },
        {
        'id': '002',
        'name': 'Round Chair',
        'price': '$25',
        'discount': '$20',
        'image': './img/unique.png'


    },
        {
        'id': '003',
        'name': 'Kitchen Chair',
        'price': '$30',
        'discount': '$25',
        'image': './img/feat1.png'


    },
        {
        'id': '004',
        'name': 'Dining Chair',
        'price': '$40',
        'discount': '$35',
        'image': './img/Rectangle 138.png'


    },
        {
        'id': '005',
        'name': 'Balcony Chair',
        'price': '$50',
        'discount': '$45',
        'image': './img/Rectangle 134.png'


    },
        {
        'id': '005',
        'name': 'Office Chair',
        'price': '$60',
        'discount': '$55',
        'image': './img/Rectangle 137.png'


    }
    
]
    return (
        <div>

            <Header title="Shop Grid Default" />
            <Filter />
            <div className='container'>
                <div className='grid-products'>
                    {
                            products.map((item) =>(
                                <GridProduct
                               item ={item}
                                />
                            ))
                    }
                </div>
            </div>
           <FooterImage/>
           <Footer/>
           <FooterBottom/>

        </div>
    )
}

export default Grid

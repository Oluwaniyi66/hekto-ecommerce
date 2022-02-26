import React, { useState } from 'react'
import { PaystackConsumer } from 'react-paystack';
import { useCart } from 'react-use-cart';
import ShipCardsm from './ShipCardsm'
import "./ShippingCard.css"

function ShippingCard() {
    const myShipProduct = JSON.parse(localStorage.getItem("react-use-cart"));
    const { cartTotal } = useCart();
    // const {cartTotal} = useCart()

    const user = JSON.parse(localStorage.getItem('user-info'));
const [amount, setAmount] = useState(cartTotal * 100);

const config = {
    reference: (new Date()).getTime(),
    email: user.email,
    amount: amount,
    publicKey: 'pk_test_0e6fd99d781ecf44970c4b19ad5259904e6c4844',
};

// you can call this function anything
const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    const payload = {
        'userId': user.id,
        'userName': user.name,
        'userEmail': user.email,
        'paymentReference': reference.reference,
        'paymentTxId': reference.transaction,
        'paymentStatus': reference.status,
        'amount': amount

    }
    console.log('frontend form Data', payload)
    fetch('http://localhost:8000/api/item_bought', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Accept': 'Application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then( (data)  =>{
        if(data.status == 'success'){
            console.log('message',data.message)
        }
        else{
            console.log("payment was not  successful")
        }
    })
};

// you can call this function anything
const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
}

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };

    
 
 

    const ship = [
        {
            'id': '001',
            'image': './Rectangle 34.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        },
        {
            'id': '002',
            'image': './item2.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        },
        {
            'id': '003',
            'image': './item3.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        },
        {
            'id': '004',
            'image': './watch1.png',
            'title': 'Ut diam consequat',
            'color': 'red',
            'size': 'xl',
            'price': '$12'
        }
    ]
   
    return (

        <div className='col-lg-4 col-sm-10'>
            <div className=''>
            {
                            myShipProduct.items.map((item) => (

                                <ShipCardsm

                                   item= {item}
                                />
                            ))
                        }
                  
                 
            </div>
            <div className='col-lg-12'>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-2 mt-2 mx-1 ctss'>Subtotals:</h4>
                                <h4 className='col-lg-8 mt-2 ctrs'>£{cartTotal}</h4>
                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>

                                <h4 className='col-lg-2 mt-2 mx-1 ctss'>Total:</h4>
                                <h4 className='col-lg-8 mt-2 ctrs'>£{cartTotal}</h4>
                                <div>

                                    <hr className='col-lg-12' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>
                                <div className='col-lg-12 stcc1'>  <div className='mx-3  stcc'></div> <h4> Shipping & taxes calculated at checkout</h4></div>
                            </div>
                        </div>
                        <div className='col-lg-12 cart-body'>
                            <div className='row'>
                                
                            <PaystackConsumer {...componentProps} >


         
                                {({initializePayment}) => <button onClick={() => initializePayment(handleSuccess, handleClose)}  className="mx-4 col-lg-10 mb-4 mt-4 btn pts">
                                Buy now
                                </button>}
                                </PaystackConsumer> 
                            </div>
                        </div>
                    </div>

        </div>
    )
}

export default ShippingCard

import React from 'react'
import Header from "./Header"
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useSetvalue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{basket,user},dispatch] = useSetvalue();
  return (
    <>
    <Header/>
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="" />
            <div>
                <h3>{user?.email}</h3>
                <h2 className='checkout__title' >
                    Your Shopping Basket
                </h2>
                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                {/* BasketItem */}
            </div>
        </div>
        <div className='checkout__right' >
            <Subtotal/>
        </div>
    </div>
    </>
  )
}

export default Checkout
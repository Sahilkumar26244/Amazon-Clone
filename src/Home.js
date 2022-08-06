import React from 'react'
import "./Home.css";
import Product from './Product';
import Header from "./Header"


function Home() {
  return (
    <>
    <Header/>
    <div className='home' >
            <div className='home__container' >
                <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Jun-hero/CS-PC-BUNK-3000x1200._CB633573671_.jpg" alt="" />
                <div className='home__row' >
                    <Product 
                    id="12321341"
                    title="The lean startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
                    rating={3}
                    />
                    <Product
                    id="49538094"
                    title="kenwood kMix Stand Mixer for baking, Styling Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41IvLMgDNaS._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>

                <div className='home__row' >
                    <Product
                    id="87493021"
                    title="Samsung LC49RG90 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81ncZ64JDCL._SX522_.jpg"
                    />
                    <Product
                    id="25367819"
                    title="Amazon Echo (3rd generation) | Smart speaker with alexa, Charecoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61Xg3SBl+2L._SX569_.jpg"
                    />
                    <Product
                    id="27389108"
                    title="New Apple iPad pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81a-rN2A3DS._SX679_.jpg"
                    />
                </div>
                <div className='home__row' >
                    <Product
                    id="12362890"
                    title="Samsung LC49RG90 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71F8KF5t8ML._SX522_.jpg"
                    />
                </div>
            </div>    
    </div>
    </>
  )
}

export default Home
import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Home';
import Checkout from "../Checkout"
import Login from '../Login';
// import Header from "../Header"

function AllRoutes() {
  return (
    <div>
        <Routes>
        {/* <Route path="/" element={<Header/>}/> */}
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/login" element={<Login/>  }/>
        
        </Routes>
    </div>
  )
}

export default AllRoutes;
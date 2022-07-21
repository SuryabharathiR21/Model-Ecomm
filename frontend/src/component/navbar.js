import React from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import '../component/styles/navbar.css';

const navbar = ({setShow , size}) => {
  return (
  <nav>
    <div className='nav-box'>
        <span className='shop' onClick= {() => setShow(true)}>Surya's Shopping Cart</span>
        <input className='search' type="text" placeholder="Search"></input>
    </div>
    <div className='cart' onClick={() => setShow(false)}>
    <span><TiShoppingCart/></span>
    <span>{size}</span>
    </div>
  </nav> 
 
 )
}

export default navbar
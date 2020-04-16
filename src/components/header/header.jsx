import React from 'react'
import './header.scss'
import {  Link } from 'react-router-dom'




const ShopHeader = ({numItems, total}) => {
    return (
        
            <nav className="navbar shop-header ">
           <Link className="logo text-dark"  to="/">
             J-Art Shop
            </Link>
            <Link className="shopping-cart mr-3" to="/cart">
             
                {numItems}
                <i className="cart-icon fa fa-shopping-cart" />
                  (${total})
            
            </Link>
            </nav>
           
            
     
 )
}



export default ShopHeader;
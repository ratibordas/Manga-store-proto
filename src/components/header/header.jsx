import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'




const ShopHeader = () => {
    return (
        
            <nav className="navbar shop-header ">
           <Link className="logo"  to="/">
              <h2>JManga</h2>   
            </Link>
            <Link className="shopping-cart mr-3" to="/cart">
                <i className="cart-icon fa fa-shopping-cart" />
            </Link>
            </nav>
           
            
     
 )
}



export default ShopHeader;
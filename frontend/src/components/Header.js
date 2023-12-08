import React from 'react';
import { Link} from"react-router-dom";
import"./Header.css";

const Header = (cartItems) => {
  return (
    <header className="header">
        <div>
            <h1>
        <Link to="/"className="logo">
            </Link>   
            </h1>
            </div> 
            <div className='header-links'>
                <ul>
             <li>
                <Link to="/">Home</Link>
                </li>
                </ul>

                <ul>
             <li>
                <Link  to = {"/contact"}>Contact</Link>
                </li>
                </ul>
                     
                <ul>
             <li>
                <Link  to = {"/items"}>Items</Link>
                </li>
                </ul>

                <ul>
             <li>
                <Link  to = {"/Info"}>Info</Link>
                </li>
                </ul>



                <ul>
             <li>
                <Link to="/cart">Cart <span className='cart-length'>
                  {cartItems.length === 0 ? "": cartItems.length}</span></Link>
                </li>
                </ul>
        </div>        
    </header>
  )
}
export default Header
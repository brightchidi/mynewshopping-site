import React from 'react'
import'./Footer.css'
import {FaFacebookSquare} from "react-icons/fa";
import{FaWhatsappSquare} from "react-icons/fa"
import{FaInstagramSquare}from"react-icons/fa";
import{FaTwitterSquare}from "react-icons/fa"

const Footer = () => {
  return (
    <div className='main-footer-container'>
            <div className='container-footer'>
              <h4>Address:Phase 2 Jikwoyi, Abuja.</h4>             
             <div className='email'>Email:brightchidi@gmail.com</div> 
             <div className='contact-us'><FaWhatsappSquare className="contact-no"/> +2349066226451</div>
       <div className='contact-sites'>
        <FaFacebookSquare onClick={()=>FaFacebookSquare(FaFacebookSquare)}/>
         <FaInstagramSquare/>
        <FaTwitterSquare/>   
        </div>         
             </div>
             </div>


  
  )
}

export default Footer
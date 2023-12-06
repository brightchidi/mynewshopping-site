import React from 'react'
import'./Contact.css'
import {FaFacebookSquare} from "react-icons/fa";
import{FaSquareYoutube}from "react-icons/fa6";
import{FaInstagramSquare}from"react-icons/fa";
import{FaTwitterSquare}from "react-icons/fa"
import{FaWhatsappSquare} from "react-icons/fa"
import{FaTiktok}from "react-icons/fa"
const Contact = () => {
  return (
    
    <div className='contact-container'>
        <h1>Bc Comics</h1>
        <p>this is my  contact page.click,  to our website links to know 
          <br/>
          more of us and to follow,or call our number below.  </p>
        <section className='form section'>
          <form className="form-container">
      
      <input className='form-input'  type='email' id='email' placeholder='email' required/>
    <br/>
      <input className="form-input" type="password" id='password' placeholder='password'required />
      <br/>
      <button className="form-button" type="submit">Login</button>
    </form>
    
        </section>
        
       <div className='website'> 
    <FaFacebookSquare/>
   
<FaSquareYoutube/> 
   <FaInstagramSquare/>        
<FaTwitterSquare/> 
      <FaTiktok/>   
       <FaWhatsappSquare/>   
    </div>
    </div>
  
  )
}

export default Contact
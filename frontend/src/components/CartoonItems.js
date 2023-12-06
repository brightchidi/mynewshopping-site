import React from 'react'
import CartoonCard from './CartoonCard'
import './CartoonCard.css'

const CartoonItems = ({cartoonInfo, onCartoonClick}) => {
    console.log(cartoonInfo)
  return (
    <div className='carditems-container'>
        {cartoonInfo.map((item) =>{

            return(
                <CartoonCard  key={item.id} 
             item={item}
                 onCartoonClick={onCartoonClick}
              />
               
            )
       
        })}



        
      
    </div>
  )
}

export default CartoonItems
import React from 'react'
import './CartoonCard.css'
import { Link } from 'react-router-dom'

const CartoonCard = ({item, onCartoonClick}) => {
    console.log(item)
   
    console.log(item.image)

  return (
    <div className='cartoon-card-container' onClick={()=> onCartoonClick(item.id)}>
      <div className='cartoon-card-wrapper'> 
        <div className='card'>
                       
             <img className='cartoon-card-image'src={item.image}  
               alt={item.name} />
               
                      <Link to="/Info">
                      <button className='learnmore'>learn More</button>
            </Link>   
          
                                
            </div>
            </div>
        
    </div>
  )
}

export default CartoonCard
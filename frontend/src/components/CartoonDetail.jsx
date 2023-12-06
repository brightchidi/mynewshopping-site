import React from 'react'
import { Link } from 'react-router-dom'
import './CartoonDetail.css'
const CartoonDetail = ({selectedCartoonInfo}) => {

    console.log(selectedCartoonInfo)
  return (
    <div className='container'>
        <h2>Cardtoon detail page</h2>
        {selectedCartoonInfo ?(
            <div className="details" >
                  {/* <h4>{}</h4> */}                 l
                <img src={selectedCartoonInfo.image} alt={selectedCartoonInfo.name}/>
                <div className='wrapper'>{selectedCartoonInfo.name}<h3><h2>$</h2>{selectedCartoonInfo.price}</h3>  
                <h4 className='description'>{selectedCartoonInfo.Description}</h4>
  </div>
                
                           
            </div>
            
        ):(
            
            <p>Bright no cartoon detail selected</p>
        )}
          
    </div>
  )
}

export default CartoonDetail
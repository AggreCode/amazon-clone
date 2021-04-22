import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
function CheckoutProduct({id, title, rating, image, price}) {
   const [state,dispatch] = useStateValue();
      const remove=()=>{
          dispatch(
              {
                  type: 'REMOVE_FROM_BASKET',
                   id
                }
          )
      }
    return (
        <div className="checkout_product">
           <img src= {image} alt="" />
         <div className="checkout_product_info">
         <p>{title}</p>
           <p className= "checkout_product_price">
               <small>Rs  </small>
               <strong>{price}</strong>
               </p> 
             <div className="checkout_product_rating">
                  {
                      Array(rating)
                      .fill()
                      .map((_)=>
                      {
                       return   <p> ⭐ </p>
                      }
                      )
                  }
             </div>
             <button className="remove_button" onClick={remove}>Remove from Basket</button>

         </div>
               </div>
    )
}

export default CheckoutProduct

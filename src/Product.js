import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
function Product({id, title, price, rating , image}) {
   const [{basket}, dispatch] = useStateValue();
    const addToBasket =()=>{
       
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className= "product">
            <div className="product_info">
            <p>{title}</p>
           <p className= "product_price">
               <small>Rs</small>
               <strong>{price}</strong>
               </p> 
             <div className="product_rating">
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
            </div>
            
             <img src={image}></img>
             <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product

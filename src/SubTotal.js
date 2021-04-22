import React from 'react'
import {useStateValue} from './StateProvider'
import './SubTotal.css'
function SubTotal() {
    const [{basket}]= useStateValue();
    let totalPrice=0;
    basket.forEach(ele => {
        totalPrice += ele.price;
    });
    return (
        <div className="subtotal">
             <h3 className="title">SubTotal ({basket?.length} items): Rs {totalPrice} </h3>
             
             <div className="checkout_proceed">
             <button>Proceed To checkout</button>
             </div>
            
        </div>
    )
}

export default SubTotal

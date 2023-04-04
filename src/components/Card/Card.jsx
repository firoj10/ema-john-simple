import React from 'react';
// import '/.Card.css'
import './Card.css'

const Card = ({cart}) => {
    
console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice+product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity =  quantity + product.quantity;
    }
    
    
    const  tax = totalPrice*7/100;
   const grandTotal = totalPrice +  totalShipping + tax;



    return (
        <div className='cart'>
        <h1>ORDER SUMMARY</h1>
        <p>Select items:{quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shapping: {totalShipping}</p>
        <p>Tex:{tax.toFixed(2)}</p>
        <h3>grandTotal:{grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Card;
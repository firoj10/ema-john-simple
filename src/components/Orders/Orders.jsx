import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id)=>{
      const remanningCart = cart.filter(product=> product.id !==id)
      setCart(remanningCart);
      removeFromDb(id)
    }
    const handleClearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }
    console.log(savedCart);
    return (
        <div className='shop-container'>
        <div className='review-container'>
{
    cart.map(product=> <ReviewItem
    key={product.id}
    product={product}
    handleRemoveFromCart={handleRemoveFromCart}
    ></ReviewItem>)
}
  
       </div>
        <div className='card-container'>
   <Card cart={cart}
   handleClearCart={handleClearCart}
   ></Card>
       </div>
   </div>
    );
};

export default Orders;
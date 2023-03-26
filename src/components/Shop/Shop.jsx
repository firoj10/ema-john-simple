import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
    }
    return (
     
        <div className='shop-container'>
             <div className='products-container'>
      {
        products.map(product=> <Product
        product={product}
        key={product.id}
        handleAddToCart={handleAddToCart  }
        ></Product>)
      }
            </div>
             <div className='card-container'>
             <h1>ORDER SUMMARY</h1>
        <p>Select items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
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



    useEffect(()=>{
        // console.log('produts',products )
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1L: get id
        for(const id in storedCart){
            //step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
              //step 3 get quantuty of the product
              if (addedProduct){
              const quantity = storedCart[id];
              addedProduct.quantity = quantity
              //step 4 add the addedProduct to the save
              savedCart.push(addedProduct);
              }
        }
        //step 5 set the card
        setCart(savedCart);
    },[products])





    const handleAddToCart = (product) =>{
    //   let newCart = [];

            const newCart = [...cart, product];
  

//     const exists = cart.find(pd => pd.id === product.id);
//     if(!exists){
//         product.quantity = 1;
//    newCart = [...cart, product];
//     }else{
//         exists.quantity = exists.quantity +1;
//         const remaning = cart.filter(pd => pd.id !==product.id);
//         newCart=  [...remaning, exists];
//     }
    setCart(newCart);
       addToDb(product.id)
    }




    return (  
        <div className='shop-container'>
             <div className='products-container'>
      {
        products.map(product=> <Product
        product={product}
        key={product.id}
        handleAddToCart={handleAddToCart}
        ></Product>) }
            </div>
             <div className='card-container'>
        <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;
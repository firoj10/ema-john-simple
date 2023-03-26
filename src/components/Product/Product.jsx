import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
     
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
           <p>Price:{seller}</p>
           <p>Manufacturer:{ratings}</p>
           <p>Ratining:{price} Stars</p>
          </div>
          <button className='btn-cart'>add to card</button>
        </div>
    );
};

export default Product;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
           <img src={img} alt="" />
     
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
           <p>Price:{seller}</p>
           <p>Manufacturer:{ratings}</p>
           <p>Ratining:{price} Stars</p>
          </div>
          <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>add to card
          <FontAwesomeIcon icon={faShoppingCart}/>
          </button>
        </div>
    );
};

export default Product;
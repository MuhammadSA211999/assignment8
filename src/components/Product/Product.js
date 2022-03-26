import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price, } = product;

    return (
        <div className='ms-2 product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name.slice(0, 12)}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='me-5 btn-cart'>
                <p className='btn-text'>Purchease</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
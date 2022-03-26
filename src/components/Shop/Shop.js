import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('assignment.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const addedItem = [...cart, product]
        setCart(addedItem)
    }
    const clearCart = () => {
        setCart([])
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className='row g-2'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart
                    clearCart={clearCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
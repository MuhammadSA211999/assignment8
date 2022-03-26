import React from 'react';
import './Header.css';



const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h2>Logo</h2>
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Explore</a>
                    <a href="/about">About</a>
                </div>
            </nav>
            <div className='text'>
                <h1 className='title'>Product Stored</h1>
                <h1 className='title'>Choose your Product</h1>
            </div>
        </div>
    );
};

export default Header;

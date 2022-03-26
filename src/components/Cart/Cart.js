import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart }) => {
    const [justOne, setOne] = useState('')
    let nameList = []
    for (const product of cart) {
        let name = product.name
        nameList.push(name)

    }
    const addedName = nameList.map(oneName => oneName.slice(0, 10) + ', ')

    const chooseOne = () => {
        const one = addedName[Math.floor(Math.random() * addedName.length)]
        setOne(one.split(','))
    }

    return (
        <div className='cart'>
            <h2>Total added: {cart.length}</h2>
            <div className="name">
                <h3 className='addedName'>{addedName}</h3>
            </div>
            <button onClick={clearCart} className='btn btn-info'>Choose Again</button>
            <button onClick={() => chooseOne()} className='btn btn-success ms-2'>Choose 1</button>
            <h3>Your one is:</h3>
            <h3>{justOne}</h3>
        </div>
    );
};

export default Cart;
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='container'>
            <h2 className='text-center'>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className='text-center'>Your cart is empty</p>
            ) : (
                <div className='cart-items'>
                    <div className='total-price'>
                        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    </div>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}

                </div>
            )}
        </div>
    );
};

export default Cart;
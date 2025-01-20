import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../utils/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const totalPrice = item.price * item.quantity;

    const handleIncrement = () => {
        dispatch(incrementQuantity({ id: item.id }));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity({ id: item.id }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: item.id }));
    };

    return (
        <div className='cart-item'>
            <img
                src={item.image}
                alt={item.name}
                className='cart-item-image'
                style={{ width: "200px", height: "200px" }}
            />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <button className='btn btn-sm btn-info mx-2' onClick={handleIncrement}>+</button>
            <button className='btn btn-sm btn-success mx-2' onClick={handleDecrement}>-</button>
            <button className='btn btn-danger btn-sm mx-2' onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;
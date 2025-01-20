import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../utils/cartSlice';
import '../css/CartItem.css'; // Import custom CSS

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
        <div className='cart-item card mb-3'>
            <div className="row g-0">
                <div className="col-auto">
                    <img
                        src={item.image}
                        alt={item.name}
                        className='img-fluid'
                    />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price: ${item.price}</p>
                        <div className="item-actions">
                            <button className='btn btn-sm btn-info mx-2' onClick={handleDecrement}>-</button>
                            <span>{item.quantity}</span>
                            <button className='btn btn-sm btn-success mx-2' onClick={handleIncrement}>+</button>
                        </div>
                        <p className="card-text mt-2">Total Price: ${totalPrice.toFixed(2)}</p>
                        <button className='btn btn-danger btn-sm' onClick={handleRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../utils/useProduct';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';
import '../css/ProductPage.css'

const Product = () => {
    const [showMessage, setShowMessage] = useState(false);

    const { pdctId } = useParams();

    const dispath = useDispatch();

    const handleAddItem = () => {
        dispath(addItems(productInfo));

        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 400); 
    }

    const productInfo = useProduct({ pdctId });

    return (

        <div className='container'>

            <div>
                {
                    showMessage && <div className="popup-message">Product added to cart!</div>
                }
            </div>

            <div className='row my-3'>
                <div className='col-12 col-md-6 d-flex justify-content-center'>
                    <img src={productInfo["image"]} alt="product_image" style={{ "width": "350px" }} />
                </div>
                <div className='col-12 col-md-6'>
                    <h1>{productInfo.title}</h1>
                    <h3 className='text-secondary'>{productInfo["description"]}</h3>
                    <h2>${productInfo["price"]}</h2>
                    <h2>⭐{productInfo?.rating?.rate}</h2>
                    <button
                        className='btn btn-success'
                        onClick={handleAddItem}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
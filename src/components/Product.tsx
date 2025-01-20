import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../utils/useProduct';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';
import '../css/ProductPage.css'
import '../css/shimmer.css'

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

    return (productInfo.length === 0) ?
        (
            <div className="container card  col-12 col-sm-6 col-md-4 col-lg-3 mb-3 shimmer-card" style={{ height: '500px' }}>
                <div className='card-img-container mt-1' style={{ height: '250px', overflow: 'hidden', backgroundColor: '#e8e8e6' }}>

                </div>
                <div className="card-body bg-white mt-3">
                    <h4 className="card-title" style={{ height: '55px', overflow: 'hidden', backgroundColor: '#e8e8e6' }}></h4>
                    <h4 className="card-title" style={{ height: '70px', overflow: 'hidden', backgroundColor: '#e8e8e6' }}></h4>
                    <h4 className="card-title" style={{ height: '20px', overflow: 'hidden', backgroundColor: '#e8e8e6' }}></h4>
                    <h4 className="card-title" style={{ height: '20px', overflow: 'hidden', backgroundColor: '#e8e8e6' }}></h4>
                </div>
            </div>
        ) : (

            <div className='container'>

                <div>
                    {
                        showMessage && <div className="popup-message">Product added to cart!</div>
                    }
                </div >

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
            </div >
        )
}

export default Product
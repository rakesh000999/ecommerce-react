import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../utils/useProduct';

const Product = () => {

    const { pdctId } = useParams();

    const productInfo = useProduct({ pdctId });
    console.log(productInfo);

    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-12 col-md-6 d-flex justify-content-center'>
                    <img src={productInfo["image"]} alt="product_image" style={{ "width": "350px" }} />
                </div>
                <div className='col-12 col-md-6'>
                    <h1>{productInfo.title}</h1>
                    <h3 className='text-secondary'>{productInfo["description"]}</h3>
                    <h2>${productInfo["price"]}</h2>
                    <h2>⭐{productInfo?.rating?.rate}</h2>
                    <button className='btn btn-success'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
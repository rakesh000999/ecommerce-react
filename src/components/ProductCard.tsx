import React from 'react'

const ProductCard = (props) => {

    const { productData } = props;

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className="card" style={{ height: '500px' }}>
                <div className='card-img-container' style={{ height: '300px', overflow: 'hidden' }}>
                    <img
                        className="card-img-top object-contain"
                        src={productData.image}
                        alt="Title"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{productData.title}</h4>
                    <p className="card-text">{productData.description.substring(0, 60)}...</p>
                    <p className="card-text">${productData.price}</p>
                    <p className="card-text">Rating: {productData.rating?.rate}</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
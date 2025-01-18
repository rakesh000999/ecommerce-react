import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Body = () => {

    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);

    const [buttonName, setButtonName] = useState("Top Rated Products");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();

        setListOfProducts(json);
        setFilteredProductList(json);
    }

    return (

        <div className='container'>

            <button
                className='btn btn-success my-3'
                onClick={() => {
                    if (buttonName == "Top Rated Products") {
                        setButtonName("All Products");
                        const filteredProductList = listOfProducts.filter(
                            (product) =>
                                product.rating.rate > 4
                        )
                        setFilteredProductList(filteredProductList);
                    } else {
                        setButtonName("Top Rated Products");
                        const filteredProductList = setFilteredProductList(listOfProducts);
                    }
                }}
            >
                {buttonName}
            </button>

            <div className="row">
                {
                    filteredProductList.map((product) => (
                        <ProductCard key={product.id} productData={product} />
                    ))
                }
            </div>
        </div >
    )
}

export default Body;
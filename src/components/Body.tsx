import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Shimmer from './Shimmer';

const Body = () => {

    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [buttonName, setButtonName] = useState("Top Rated Products");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (searchText === "") {
            setFilteredProductList(listOfProducts);
        } else {
            const filteredProducts = listOfProducts.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredProductList(filteredProducts);
        }
    }, [searchText, listOfProducts]);

    const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setListOfProducts(json);
        setFilteredProductList(json);
    };

    const filterProduct = () => {
        if (buttonName === "Top Rated Products") {
            setButtonName("All Products");
            const filteredProductList = listOfProducts.filter((product) => product.rating.rate > 4);
            setFilteredProductList(filteredProductList);
        } else {
            setButtonName("Top Rated Products");
            setFilteredProductList(listOfProducts);
        }
    };

    return filteredProductList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <button
                        className='btn btn-success my-3'
                        onClick={filterProduct}
                    >
                        {buttonName}
                    </button>

                    {/* Search Product */}
                </div>
                <div className='align-items-center'>
                    <input
                        type="text"
                        className='form-control me-sm-2'
                        value={searchText}
                        placeholder='Seach product'
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            <hr />
            <div className="row">
                {
                    filteredProductList.map((product) => (
                        <ProductCard key={product.id} productData={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;

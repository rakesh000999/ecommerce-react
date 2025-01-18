import { useEffect, useState } from 'react'
import { PRODUCT_API } from './constants'

const useProduct = ({ pdctId }) => {
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(PRODUCT_API + pdctId);
        const json = await data.json();

        setProductInfo(json);
    };

    return productInfo;
}

export default useProduct;
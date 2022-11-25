import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data));
    }, []);

    const data = { products };

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
}

export { ProductContext, ProductProvider };

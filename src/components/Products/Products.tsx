import React, {useEffect, useState} from 'react';

import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts]= useState([]);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(value=>setProducts(value))
    }, []);


    return (
        <div>
            {
                products && products.map(product => <Product product={product}/>)
            }
        </div>
    );
};

export default Products;
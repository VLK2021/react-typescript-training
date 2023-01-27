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
        <div className={'products'}>
            {
    // @ts-ignore
                products && products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Products;
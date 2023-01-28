import React, {useEffect, useState} from 'react';

import './ProductsStyle.css';
import Product from "../Product/Product";
import {productService} from "../../services/product.service";
import {IProduct} from "../../interfaces/IProduct";


const Products = () => {
    const [products, setProducts]= useState([]);


    useEffect(()=>{
        productService.getAll().then(value => setProducts(value.data))
    }, []);


    return (
        <div className={'products'}>
            {
                products && products.map((product:IProduct)  => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export default Products;
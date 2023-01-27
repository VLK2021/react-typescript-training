import React from 'react';
import { IProduct } from '../../interfaces/IProduct';

import './ProductStyle.css';


interface iProduct {
    product:IProduct
}

const Product = ({product}:iProduct) => {
    return (
        <div className={'container'}>
            <h1>{product.title}</h1>


        </div>
    );
};

export default Product;
import React, {useState} from 'react';

import { IProduct } from '../../interfaces/IProduct';
import './ProductStyle.css';


interface iProduct {
    product:IProduct
}

const Product = ({product}:iProduct) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={'container'}>
            <h5>{product.title}</h5>

            <div className={'container-img'}>
                <img src={product.image} alt="photo"/>
            </div>

            <div>
                <div>Category: {product.category}</div>
                <div>Price: {product.price}$</div>
            </div>

            <div className={'btn'}>
                <button onClick={() => setVisible(prev => !prev)}>details</button>
            </div>

            <div className={'product-info'}>
                {
                    visible && <div>
                        {product.description}
                    </div>
                }</div>


        </div>
    );
};

export default Product;
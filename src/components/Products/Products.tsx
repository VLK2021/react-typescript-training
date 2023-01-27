import React from 'react';

import {IProduct} from "../../interfaces/IProduct";



interface productProps {
    products:IProduct[]
}


const Products = ({products}: productProps) => {

    return (
        <div>
            {
                products && products.map(prod => <div key={prod.id}>{prod.title}</div>)
            }
        </div>
    );
};

export default Products;
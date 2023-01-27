import React from 'react';

import {IProduct} from "../../interfaces/IProduct";



interface productInterface {
    products:IProduct[]
}


const Products = ({products}: productInterface) => {

    return (
        <div>
            {
                products && products.map(prod => <div key={prod.id}>{prod.title}</div>)
            }
        </div>
    );
};

export default Products;
import React from 'react';

const Electronics = () => {

    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>console.log(json))


    return (
        <div>
            Electronics
        </div>
    );
};

export default Electronics;
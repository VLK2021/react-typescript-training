import React from 'react';

const Jeweleries = () => {

    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>console.log(json))


    return (
        <div>
            Jeweleries
        </div>
    );
};

export default Jeweleries;
import React, {useEffect, useState} from 'react';

import './App.css';
import Products from "./components/Products/Products";


function App() {


    const [products, setProducts]= useState([]);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(value=>setProducts(value))
    }, []);

  return (
    <div className="App">
        <Products products={products}/>
    </div>
  );
}

export default App;

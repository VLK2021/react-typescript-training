import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import './NavigationStyle.css';
import {productService} from "../../services/product.service";


const Navigation = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        productService.getCategories().then(value => setCategories(value.data))
    }, []);

    return (
        <div className={'nav'}>
            <Link to={'/'}>Home</Link>

            {
                categories &&
                categories.map((cat:string) => <Link to={`${cat.replace(' ', '').replace('\'', '')}`}>{cat}</Link>)
            }
        </div>
    );
};

export default Navigation;
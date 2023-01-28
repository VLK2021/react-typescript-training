import React from 'react';

import Products from "../components/Products/Products";
import Navigation from "../components/Navigation/Navigation";


const Layout = () => {
    return (
        <div className={'layout'}>
            <Navigation/>
            <Products/>
        </div>
    );
};

export default Layout;
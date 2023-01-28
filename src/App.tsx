import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Electronics from "./components/Electronics/Electronics";
import Jeweleries from "./components/Jeweleries/Jeweleries";
import Products from "./components/Products/Products";
import MenSclothing from "./components/Men'sclothing/Men'sclothing";
import Womensclothing from "./components/Womensclothing/Womensclothing";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Products/>}/>
                    <Route path={'/electronics'} element={<Electronics/>}/>
                    <Route path={'/jewelery'} element={<Jeweleries/>}/>
                    <Route path={'/mensclothing'} element={<MenSclothing/>}/>
                    <Route path={'/womensclothing'} element={<Womensclothing/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

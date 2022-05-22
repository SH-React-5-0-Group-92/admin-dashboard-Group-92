import React from 'react';
import CardList from './cardList';
import  './products.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'

const Products = () => {
    return (
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <h1 className="p-p">Products Page</h1>
            <CardList />
            
        </div>
        </div>
    )
}

export default Products;
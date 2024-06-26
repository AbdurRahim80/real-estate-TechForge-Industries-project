import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
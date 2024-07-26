import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { HelmetProvider } from 'react-helmet-async';

const Root = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <HelmetProvider>
                <div className=' bg-white h-[70px] sticky z-50 top-0'>
                    <Navbar />
                </div>
                <Outlet />
                <Footer />
            </HelmetProvider>
        </div>
    );
};

export default Root;
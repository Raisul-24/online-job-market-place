import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl">
                <Outlet />
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
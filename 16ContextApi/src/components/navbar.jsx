import React from 'react';
import Nav2 from './nav2';

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 bg-black text-white items-center'>
            <h1 className='font-bold text-4xl'>Ankur</h1>
            <Nav2/>
        </div>
    );
}

export default Navbar;

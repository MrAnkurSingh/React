import React from 'react';
import { useContext } from 'react';
import { ThemeDataConetext } from '../context/ThemeContext';

const Nav2 = () => {
    const [theme]=useContext(ThemeDataConetext)
    return (
        <div className='flex gap-3 font-bold'>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contect</h1>
            <h1>{theme}</h1>
        </div>
    );
}

export default Nav2;

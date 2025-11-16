import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between p-7 bg-cyan-700 rounded-2xl'>
<div>
    <h1>A4ankur</h1>
</div>
<div className='flex justify-between gap-4'>
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>
     <Link to='/products'>products</Link>
</div>
          
        </div>
    );
}

export default Navbar;

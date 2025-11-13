import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav">
            <div className="head">
               <h1> MrAnkur</h1>
            </div>
             <div className='links'>
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/about'><h3>About</h3></Link>
            <Link to='/contact'><h3>Contect</h3></Link>
        </div>
        </div>
       
    );
}

export default Navbar;

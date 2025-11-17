import React from 'react';
import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <div className='flex justify-between p-10 text-2xl font-bold '>

            <Link to='/products/male'>Male</Link>
            <Link to='/products/female'>Female</Link>
        </div>
    );
}

export default Products;

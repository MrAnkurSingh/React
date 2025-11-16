import React from 'react';
import { Link } from 'react-router-dom';
const Products = () => {
    return (
        <div className='flex justify-between p-10'>

            <Link to='/products/male'>male</Link>
            <Link to='/products/female'>Female</Link>
        </div>
    );
}

export default Products;

import React from 'react'
import { products } from './products';

const ProductList = () => {
  return (
    <div className='flex flex-wrap justify-evenly gap-5'>
        {products.map((product) => (
            <div className='flex justify-evenly'>
                <div>
                <img className='w-70 h-70 shadow-sm' src={product.image} alt="" />
                <div>
                <p className='flex justify-evenly'>{product.name}</p>
                <p className='flex justify-evenly'>{product.category}</p>
                <p className='flex justify-evenly'>{product.price}</p>
                </div>
                </div>
                </div>
        ))}
    </div>
  );
};

export default ProductList
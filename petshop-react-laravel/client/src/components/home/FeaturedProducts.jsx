import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';

const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.products);

    return (
        <div className='container mx-auto py-10 px-4 md:px-0'>
            <h2 className='text-4xl font-bold text-center mb-8'>Featured Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {products.slice(0, 3).map((product) => (
                    <div key={product.id} className='relative'>
                        <Link to={`/products/${product.id}`} className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity duration-300 rounded'>
                            <FaSearch className='text-white text-2xl' />
                        </Link>
                        <img className='w-full h-60 object-cover rounded' src={product.thumbnail} alt={product.name} />
                        <div className='p-4 bg-white'>
                            <h4 className='text-lg font-semibold mb-2'>{product.name}</h4>
                            <p className='text-secondary'>{formatPrice(product.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-8'>
                <Link className='inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition duration-300' to='/products'>All Products</Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;

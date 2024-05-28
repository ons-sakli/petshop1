import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';

const GridView = ({ products }) => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6'>
        {products.map((product) => {
          const { id, name, price, thumbnail } = product;
          return (
            <div key={id} className='bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
              <div className='relative rounded-md'>
                <Link
                  to={`/products/${id}`}
                  className='flex items-center justify-center absolute bg-black bg-opacity-50 w-full h-full rounded-md opacity-0 hover:opacity-100 transition-all duration-300'
                >
                  <span className='flex items-center justify-center bg-secondary-100 w-10 h-10 rounded-full'>
                    <FaSearch className='text-white' />
                  </span>
                </Link>
                <div className='w-full h-[250px] flex items-center justify-center bg-gray-100'>
                  <img
                    className='max-w-full max-h-full object-contain'
                    src={thumbnail}
                    alt={name}
                  />
                </div>
              </div>
              <footer className='flex mt-4 justify-between items-center p-4'>
                <h4 className='mb-0 font-medium text-gray-900'>{name}</h4>
                <p className='mb-0 font-bold text-secondary-100 tracking-widest'>{formatPrice(price)} </p>
              </footer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridView;

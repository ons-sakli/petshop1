import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { MdAddCircle, MdUpdate, MdViewList } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth-actions';
import SafepetIcon from '../../assets/safepet.png';

const TheSidebar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const [activeLink, setActiveLink] = useState(null);

    const logoutUser = async () => {
        await dispatch(logout(token));
    };

    const linkStyle = 'border-b-2 pb-3 border-gray-500 text-black'; // Change text color to black
    const activeLinkStyle = 'hover:shadow-pink-500 focus:shadow-pink-500';
    const mauveColor = '#9370DB'; // Mauve color

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='flex flex-col h-full px-6'>
            <div className='mb-12 mt-8 flex flex-col justify-center items-center'>
                <img src={SafepetIcon} alt="safepet icon" style={{ width: '200px', height: 'auto' }} />
                <h1 className='uppercase text-3xl tracking-wider font-extrabold text-center'>
                    <span className='text-primary'>Safe</span>
                    <span className='text-secondary-200' style={{ color: '#B399D4' }}>pet</span>
                </h1>
            </div>
            <div className='flex flex-col text-gray-200 font-semibold tracking-wider text-lg space-y-3'>
                <Link
                    to='/admin/dashboard'
                    className={`${linkStyle} ${activeLink === '/admin/dashboard' ? activeLinkStyle : ''}`}
                    onClick={() => handleLinkClick('/admin/dashboard')}
                    style={{ color: activeLink === '/admin/dashboard' ? mauveColor : 'black' }}
                >
                    <span className='inline-flex mr-3 text-primary'><AiFillDashboard /> </span>
                    Dashboard
                </Link>
                <Link
                    to='/admin/dashboard/products'
                    className={`${linkStyle} ${activeLink === '/admin/dashboard/products' ? activeLinkStyle : ''}`}
                    onClick={() => handleLinkClick('/admin/dashboard/products')}
                    style={{ color: activeLink === '/admin/dashboard/products' ? mauveColor : 'black' }}
                >
                    <span className='inline-flex mr-3 text-primary'> <MdViewList /> </span>
                    List Products
                </Link>
                <Link
                    to='/admin/dashboard/addproduct'
                    className={`${linkStyle} ${activeLink === '/admin/dashboard/addproduct' ? activeLinkStyle : ''}`}
                    onClick={() => handleLinkClick('/admin/dashboard/addproduct')}
                    style={{ color: activeLink === '/admin/dashboard/addproduct' ? mauveColor : 'black' }}
                >
                    <span className='inline-flex mr-3 text-primary'><MdAddCircle /> </span>
                    Add Product
                </Link>
                <Link
                    to='/admin/dashboard/updateproducts'
                    className={`${linkStyle} ${activeLink === '/admin/dashboard/updateproducts' ? activeLinkStyle : ''}`}
                    onClick={() => handleLinkClick('/admin/dashboard/updateproducts')}
                    style={{ color: activeLink === '/admin/dashboard/updateproducts' ? mauveColor : 'black' }}
                >
                    <span className='inline-flex mr-3 text-primary'>  <MdUpdate /> </span>
                    Update Product
                </Link>
            </div>
            <div className='mt-auto mb-8'>
                <button className='px-4 py-2 bg-gray-400 rounded-md flex items-center shadow-lg' onClick={logoutUser}>
                    <span className='inline-flex mr-3 font-bold'><BiLogOutCircle /></span>
                    logout
                </button>
            </div>
        </div>
    );
};

export default TheSidebar;

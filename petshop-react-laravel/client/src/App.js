import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './store/actions/products-actions';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import MainNavigation from './layout/MainNavigation';
import Footer from './layout/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import TheProducts from './components/dashboard/TheProducts';
import AddProduct from './components/dashboard/AddProduct';
import UpdateProducts from './components/dashboard/UpdateProducts';
import ProductUpdate from './components/dashboard/ProductUpdate';

import LoginRedirect from './components/auth/LoginRedirect';
import RegisterRedirect from './components/auth/RegisterRedirect';
import DashboardRedirect from './components/auth/DashboardRedirect';
import HomeRedirect from './components/auth/HomeRedirect';

import LandingPage from './pages/LandingPage';
import News from './pages/News';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {/* Condition pour afficher ou non la barre de navigation */}
      {!isAdmin && location.pathname !== '/' && location.pathname !== '/news' && <MainNavigation />}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route element={<HomeRedirect />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Route>
          <Route element={<LoginRedirect />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<RegisterRedirect />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<DashboardRedirect />}>
            <Route path="admin/dashboard" element={<Dashboard />}>
              <Route path="products" element={<TheProducts />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="updateproducts">
                <Route index element={<UpdateProducts />} />
                <Route path=":productId" element={<ProductUpdate />} />
              </Route>
            </Route>
          </Route>
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {!isAdmin && location.pathname !== '/news' && <Footer />}
    </>
  );
};

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.jpeg'; // Assurez-vous que le chemin d'accès vers votre logo est correct

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate('/home'); // Rediriger vers la page principale
  };

  const navigateToNews = () => {
    navigate('/news'); // Rediriger vers la page des actualités
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={Logo} alt="Logo" className="w-40 h-40" />
      </motion.div>
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to SafePet website
      </motion.h1>
      <motion.button
        className="w-48 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg mb-4"
        onClick={navigateToShop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Appoinement
      </motion.button>
      <motion.button
        className="w-48 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg mb-4"
        onClick={navigateToShop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Shop
      </motion.button>
      <motion.button
        className="w-48 px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg"
        onClick={navigateToNews} // Utilisez la fonction de navigation pour rediriger vers la route des actualités
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        News
      </motion.button>
    </div>
  );
};

export default LandingPage;

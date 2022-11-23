import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import Header from './components/Header';
import Home from './pages/Home';
import FeaturedBrands from './pages/FeaturedBrands';
import Electronics from './pages/Electronics';
import FoodStorage from './pages/FoodStorage';
import HouseEssentials from './pages/HouseEssentials';
import AutoIndustrial from './pages/AutoIndustrial';
import Promotions from './pages/HouseEssentials';
import HealthSafety from './pages/HealthSafety';
import ResourceCenter from './pages/ResourceCenter';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Purchases from './pages/Purchases';
import Cart from './pages/Cart';
import Footer from './components/Footer';

export default function PageChangeHandler() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Featured Brands') {
      return <FeaturedBrands />;
    }
    if (currentPage === 'Electronics') {
      return <Electronics />;
    }
    if (currentPage === 'Food Storage') {
        return <FoodStorage />;
    }
    if (currentPage === 'House Essentials') {
    return <HouseEssentials />;
    }
    if (currentPage === 'Auto Industrial') {
    return <AutoIndustrial />;
    }
    if (currentPage === 'Promotions') {
    return <Promotions />;
    }
    if (currentPage === 'Health & Safety') {
    return <HealthSafety />;
    }
    if (currentPage === 'Resource Center') {
    return <ResourceCenter />;
    }
    if (currentPage === 'Login') {
    return <Login />;
    }
    if (currentPage === 'Signup') {
    return <Signup />;
    }
    if (currentPage === 'Purchases') {
    return <Purchases />;
    }
    if (currentPage === 'Cart') {
        return <Cart />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider>
        <Box>
            <div style={{
                background: `url(./images/logoBigCrop.webp`,
                backgroundSize: "cover",
                minHeight: "140vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
   
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        </Box>
        <Footer />
    </ChakraProvider>
  );
}
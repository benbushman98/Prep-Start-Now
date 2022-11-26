import { Image, Flex, HStack, Center, ButtonGroup, chakra } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import React from "react";
import auth from '../utils/auth';
import MobileDrawer from './MobileDrawer';


const Header = ({ currentPage, handlePageChange }) => {
  const token = localStorage.getItem('id_token')
 function handleLogOut (e) {
 e.preventDefault()
 auth.logout()
 } 

  return (
    
    <chakra.header id="header">
      <Center color={'#FFB900'} fontSize={'6xl'} as='b' align={'center'}>
        PREP STARTS NOW
      </Center>
      <Flex
        w="100%"
        px="6"
        pb="7"
        align="center"
        justify="center"
        bgColor="transparent">

        {/* NAV BAR */}
        <HStack spacing="8" display={{ base: "none", md: "flex" }}>
          <Flex flex="1">

            <ButtonGroup variant="link" spacing="10">

              <Link color='#D3D3D3' to="/Home" onClick={() => handlePageChange('Home')}>
                Home
              </Link>

              <Link color='#D3D3D3' to="/FeaturedBrands" onClick={() => handlePageChange('Featured Brands')}>
                Featured Brands
              </Link>

              <Link color='#D3D3D3' to="/Electronics" onClick={() => handlePageChange('Electronics')}>
                Electronics
              </Link>

              <Link color='#D3D3D3' to="/FoodStorage" onClick={() => handlePageChange('FoodStorage')}>
                Food Storage/72-hour Kits
              </Link>

              <Link color='#D3D3D3' to="/HouseEssentials" onClick={() => handlePageChange('HouseEssentials')}>
                Household Essentials
              </Link>

              <Link color='#D3D3D3' to="/AutoIndustrial" onClick={() => handlePageChange('AutoIndustrial')}>
                Auto Industrial
              </Link>

              <Link color='#D3D3D3' to="/Promotions" onClick={() => handlePageChange('Promotions')}>
                Promotions
              </Link>

              <Link color='#D3D3D3' to="/HealthSafety" onClick={() => handlePageChange('HealthSafety')}>
                Health & Safety
              </Link>

              <Link color='#D3D3D3' to="/ResourceCenter" onClick={() => handlePageChange('ResourceCenter')}>
                Resource Center
              </Link>
              {token ? ( 
                <Link color='#D3D3D3' onClick={handleLogOut}>Log Out</Link>
              ) : (
                <>
                <Link color='#D3D3D3' to="/Login" onClick={() => handlePageChange('Login')}>
                Login
              </Link>

              <Link color='#D3D3D3' to="/Signup" onClick={() => handlePageChange('Signup')}>
                Signup
              </Link>
              </>
              )}

              <Link color='#D3D3D3' to="/Cart" onClick={() => handlePageChange('Cart')}>
                <Image
                  src='/images/cart.png'
                  width={'50px'}
                  alt="shopping cart icon"
                />
              </Link>

            </ButtonGroup>

          </Flex>
        </HStack>
        <HStack >
          <MobileDrawer display={{ base: "none", md: "flex" }} />
        </HStack>

      </Flex>

    </chakra.header>
  );
}
export default Header;
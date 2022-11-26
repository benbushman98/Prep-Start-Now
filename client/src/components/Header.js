// import {
//   Image,
//   Flex, Button, HStack, Center, ButtonGroup, chakra, Wrap, WrapItem,
// } from '@chakra-ui/react';

// import { Link } from 'react-scroll'

import { Flex, HStack, Center, ButtonGroup, chakra } from '@chakra-ui/react';
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
                Cart
              </Link>


              {/* <Wrap spacing='10px' justify='center'>

                {['Home', 'Featured Brands', 'Electronics', 'Food Storage/72-hour Kits', 'Household Essentials', 'Auto Industrial', 
                'Promotions', 'Health & Safety', 'Resource Center', 'Login', 'Signup', 'Cart'].map((item) => (

                  <WrapItem>
                    <Button _hover={{
                      color: "#D3D3D3",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                      fontSize='lg'
                      as='b'
                      color={'#FFF'} spacing="4" m={4} key={item}>{item}</Button>
                  </WrapItem>
                ))}

              </Wrap> */}

            </ButtonGroup>

          </Flex>
        </HStack>
        <HStack >
          <MobileDrawer display={{ base: "none", md: "flex" }} />
        </HStack>

        {/* Shopping Cart */}

        {/* <Center>
          <Image
            src='/images/cart.png'
            borderRadius={"2xl"}
            boxSize={'50px'}
            objectFit="cover"
            alt="TEMP SHOPPING CART IMAGE"
          />
        </Center> */}

      </Flex>

    </chakra.header>
  );
}
export default Header;
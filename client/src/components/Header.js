import { Image, Flex, Button, HStack, Center, ButtonGroup, chakra, Wrap, WrapItem } from '@chakra-ui/react';
// import Logo from '../public/logo.svg';
// import { Link } from 'react-scroll'
import React from "react";
import MobileDrawer from './MobileDrawer';
const Header = () => {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Center w="100%">
          {/* // Logo */}
          {/* <Image src={Logo.src} h="50px" /> */}
          {/* // Nav Items */}
          <HStack spacing="8" justify="center" display={{ base: "none", md: "flex" }}>
            <Flex justify="center" flex="1">

              <ButtonGroup variant="link" spacing="10">
                
                  <Wrap spacing='10px' justify='center'>

                    {['Featured Brands', 'Electronics', 'Food Storage/72-hour Kits', 'Household Essentials', 'Auto Industrial', 'Promotions', 'Health & Safety', 'Resource Center'].map((item) => (
                      <WrapItem>
                        <Button spacing="8" m={6} key={item}>{item}</Button>
                      </WrapItem>
                    ))}

                  </Wrap>
             
              </ButtonGroup>

            </Flex>
          </HStack>
          {/* // Call to action items */}
          <HStack >
            <MobileDrawer display={{ base: "none", md: "flex" }} />
          </HStack>
        </Center>
      </Flex>

    </chakra.header>
  );
}
export default Header;
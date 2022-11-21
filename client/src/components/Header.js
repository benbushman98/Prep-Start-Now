import {
  Image,
  Flex, Button, HStack, Center, ButtonGroup, chakra, Wrap, WrapItem,
} from '@chakra-ui/react';
// import { Link } from 'react-scroll'
import React from "react";
import MobileDrawer from './MobileDrawer';
const Header = () => {
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

        {/* // Nav Items */}
        <HStack spacing="8" display={{ base: "none", md: "flex" }}>
          <Flex flex="1">

            <ButtonGroup variant="link" spacing="10">

              <Wrap spacing='10px' justify='center'>

                {['Featured Brands', 'Electronics', 'Food Storage/72-hour Kits', 'Household Essentials', 'Auto Industrial', 'Promotions', 'Health & Safety', 'Resource Center'].map((item) => (
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

              </Wrap>

            </ButtonGroup>

          </Flex>
        </HStack>
        <HStack >
          <MobileDrawer display={{ base: "none", md: "flex" }} />
        </HStack>

        {/* Shopping Cart */}

        <Center>
          <Image
            src='/images/cart.png'
            borderRadius={"2xl"}
            boxSize={'50px'}
            objectFit="cover"
            alt="TEMP SHOPPING CART IMAGE"
          />
        </Center>
      </Flex>

    </chakra.header>
  );
}
export default Header;
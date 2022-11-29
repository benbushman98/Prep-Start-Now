import { useDisclosure, Flex, Button, VStack, Image, Link, ButtonGroup, } from "@chakra-ui/react";
import auth from '../utils/auth';
import Drawer from './Drawer';
import { IoMdMenu } from 'react-icons/io';
import React from "react";

const MobileDrawer = () => {
    const token = localStorage.getItem('id_token')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    function handleLogOut(e) {
        e.preventDefault()
        auth.logout()
    }
    return (
        <Flex display={{ base: "flex", md: "none" }}>
            {/* // Menu Button */}
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>

            {/* // Drawer Component */}
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="left">
                    <Flex flex={'1'} >
                        <ButtonGroup variant="link" justify="center">
                            <Flex direction={'column'}  >
                                <Link my="10px" fontSize="lg" color='#FFB900' href="/">
                                    Home
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/featuredbrands">
                                    Featured Brands
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/electronics">
                                    Electronics
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/foodstorage">
                                    Food Storage/72-hour Kits
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/essentials">
                                    Household Essentials
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/autoindustrial">
                                    Auto Industrial
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/promotions">
                                    Promotions
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/healthsafety">
                                    Health & Safety
                                </Link>
                                <Link my="10px" fontSize="lg" color='white' href="/resourcecenter">
                                    Resource Center
                                </Link>

                                {token ? (
                                    <Link my="10px" fontSize="lg" color='white' onClick={handleLogOut}>Log Out</Link>
                                ) :
                                    (
                                        <>
                                            <Link my="10px" fontSize="lg" color='white' href="/login">
                                                Login
                                            </Link>
                                            <Link my="10px" fontSize="lg" color='white' href="/signup">
                                                Signup
                                            </Link>
                                        </>
                                    )}

                                <Link my="10px" fontSize="lg" color='white' href="/cart">
                                    <Image
                                        src='/images/cart.png'
                                        width={'30px'}
                                        alt="shopping cart icon"
                                    />
                                </Link>
                            </Flex>

                        </ButtonGroup>
                    </Flex>
                </VStack>
            </Drawer>
        </Flex>
    );
};
export default MobileDrawer;
import { useDisclosure, Flex, Button, VStack, } from "@chakra-ui/react";
import Drawer from './Drawer';
import { IoMdMenu } from 'react-icons/io';
// import { Link } from 'react-scroll';
import React from "react";

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Flex display={{ base: "flex", md: "none" }} >
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
                    {['Featured Brands', 'Electronics', 'Food Storage/72-hour Kits', 'Household Essentials', 'Auto Industrial', 'Promotions', 'Health & Safety', 'Resource Center'].map((item) => (
                        <Button spacing="8" m={4} key={item}>{item}</Button>
                    ))}
                </VStack>
            </Drawer>
        </Flex>
    );
};
export default MobileDrawer;
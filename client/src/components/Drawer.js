import React from 'react';
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Flex, Text
} from "@chakra-ui/react";

const DrawerTEST = ({
    p = 15,
    placement = "right",
    width,
    isOpen,
    children,
    onClose,
    btnRef,
    title = "Menu",
    footer= "© Copyright 2022 - Prep Starts Now",
}

) => {
    return (
        <Flex w={width} >
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent alignItems="center">
                    <DrawerCloseButton color={'white'} alignSelf="end" mx={p} my={p} />
                    <DrawerHeader w={'100%'} bg="black" color={"white"} >
                        <Text as="p" fontSize={'2xl'}> {title} </Text>
                    </DrawerHeader>
                    <DrawerBody w={'100%'} bg="black">{children}</DrawerBody>
                    <DrawerFooter w={'100%'} bg="black" color={'white'}>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default DrawerTEST;
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
    footer,
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
                    <DrawerCloseButton alignSelf="end" mx={p} my={p} />
                    <DrawerHeader my={p}>
                        <Text as="p"> {title} </Text>
                    </DrawerHeader>
                    <DrawerBody>{children}</DrawerBody>
                    <DrawerFooter>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default DrawerTEST;
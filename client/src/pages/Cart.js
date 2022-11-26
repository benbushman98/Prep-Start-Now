import React from 'react';

import {
    Stack,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const Cart = () => {
    return (
        <Stack>
        <TableContainer backgroundColor={'#FFF'} spacing={3} mx={20} p={5}>
            <Table variant='simple'>
                <Thead fontSize={30} fontWeight="bold">Your Cart</Thead>
                <Thead mt={3}>
                <Tr>
                    <Th>Item</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Dummy item</Td>
                    <Td>$0.00</Td>
                    <Td>1</Td>
                </Tr>
                </Tbody>
            </Table>
            <Button mt={3} colorScheme='blue'>Check-out</Button>
        </TableContainer>
        
        </Stack>
    )
}

export default Cart;
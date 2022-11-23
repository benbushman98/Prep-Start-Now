import React from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Cart = () => {
    return (
        <TableContainer backgroundColor={'#FFF'}>
            <Table variant='simple'>
                <TableCaption>Prep Starts Now Cart</TableCaption>
                <Thead>Your Cart</Thead>
                <Thead>
                <Tr>
                    <Th>Item</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>ITEM NAME</Td>
                    <Td>PRICE</Td>
                    <Td>QUANTITY</Td>
                </Tr>
                <Tr>
                    <Td>ITEM NAME</Td>
                    <Td>PRICE</Td>
                    <Td>QUANTITY</Td>
                </Tr>
                <Tr>
                <Td>ITEM NAME</Td>
                    <Td>PRICE</Td>
                    <Td>QUANTITY</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    <Td>ITEM NAME</Td>
                    <Td>PRICE</Td>
                    <Td>QUANTITY</Td>
                </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default Cart;
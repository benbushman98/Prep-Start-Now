import React from 'react';
import {
    ChakraProvider,
    Stack,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Tfoot,
    TableContainer,
    Text,
    // centerContent,
    // Container
} from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_FOODSTORAGE } from '../utils/queries'; //this query needs to be updated or done away with, just pulls Food Storage for now
import CartRow from '../components/CartRow';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const Cart = () => {
    const { data } = useQuery(QUERY_FOODSTORAGE);
    // FIX THIS TO ONLY QUERY WHEN 'ADD TO CART' IS CLICKED^^
    const items = data?.items || [];

    function getTotalPrice() {
        // Add total $ logic 
        return (
            299.98
        )
    }

    function getTotalQuantity() {
        // Add total items logic
        return (
            2
        )
    }

    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                {/* <Container centerContent> */}
                <Stack>
                    <TableContainer backgroundColor={'#FFF'} p={5} mx={"5%"}>
                    {/* minWidth={'520px'} */}
                        <Text mb={5} fontSize={30} fontWeight="bold">Your Cart</Text>
                        <Table variant='simple' size='xsm'>
                            <Thead>
                                <Tr>
                                    <Th>Item</Th>
                                    <Th>Price</Th>
                                    <Th>Qty</Th>
                                    <Th>Remove</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <CartRow items={items} />
                            </Tbody>
                            
                            <Tfoot>
                                <Tr fontWeight="bold">
                                    <Td>TOTAL:</Td>
                                    <Td>${getTotalPrice()}</Td>
                                    <Td>{getTotalQuantity()} items</Td>
                                    <Td></Td>
                                </Tr>
                            </Tfoot>
                        </Table>
                        {/* need to figure out how to link this button to the checkout page */}
                        <Button mt={10} colorScheme='blue'>
                            Check-out
                        </Button>
                    </TableContainer>
                </Stack>
                {/* </Container> */}
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default Cart;
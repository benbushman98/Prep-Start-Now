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
    TableContainer,
} from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_CART } from '../utils/queries';
import CartRow from '../components/CartRow';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const Cart = () => {
    const { data } = useQuery(QUERY_CART);
    // FIX THIS TO ONLY QUERY WHEN 'ADD TO CART' IS CLICKED^^
    const items = data?.items || [];

    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Stack>
                    <TableContainer backgroundColor={'#FFF'} spacing={3} mx={20} p={5}>
                        <Table variant='simple'>
                            <Thead fontSize={30} fontWeight="bold">Your Cart</Thead>
                            <Thead mt={3}>
                            <Tr>
                                <Th>Item</Th>
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                                <Th></Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                <CartRow items={items}/>
                            </Tbody>
                        </Table>
                            {/* need to figure out how to link this button to the checkout page */}
                            <Button mt={3} colorScheme='blue'>
                                Check-out
                            </Button>
                    </TableContainer>
                </Stack>
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default Cart;
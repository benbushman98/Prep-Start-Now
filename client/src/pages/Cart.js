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
    Tfoot,
    TableContainer,
    Text
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
                        <Text mb={5} fontSize={30} fontWeight="bold">Your Cart</Text>
                        <Table variant='simple'>
                            <Thead>
                            <Tr>
                                <Th>Item</Th>
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                <CartRow items={items}/>
                            </Tbody>
                            <Tfoot>
                                <Th>TOTAL:</Th>
                                <Th>$ _______</Th>
                                <Th>____ items</Th>
                            </Tfoot>
                        </Table>
                            {/* need to figure out how to link this button to the checkout page */}
                            <Button mt={10} colorScheme='blue'>
                                Check-out
                            </Button>
                    </TableContainer>
                </Stack>
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default Cart;
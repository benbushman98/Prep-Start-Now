import React from 'react';
import { useQuery } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { QUERY_ALL_ITEMS } from '../utils/queries';
import DisplayCard from '../components/Card';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function Home() {
    const { data } = useQuery(QUERY_ALL_ITEMS);
    const items = data?.items || [];
    
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                    <Box>
                        <DisplayCard items={items} />
                    </Box>
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default Home;

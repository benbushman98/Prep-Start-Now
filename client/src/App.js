import * as React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import { ChakraProvider, Box } from '@chakra-ui/react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Box>
          <div style={{
            background: `url(./images/logoBigCrop.webp`,
            backgroundSize: "cover",
            minHeight: "140vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            <Box>
              <Header />
            </Box>
            <Box>
              <Home />
            </Box>
            <Box>
              <Footer />
            </Box>
          </div>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App;

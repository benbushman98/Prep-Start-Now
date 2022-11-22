import * as React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import { ChakraProvider, Box } from '@chakra-ui/react';


function App() {
  return (
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
  )
}

export default App;

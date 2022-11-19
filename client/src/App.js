import * as React from 'react'
import Home from './components/pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box>
        <div style={{
          background: `url(./images/logoBig.png)`,
          backgroundSize: "cover",
          minHeight: "150vh",
         
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

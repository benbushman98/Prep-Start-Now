import * as React from 'react'
import Home from './components/pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  )
}

export default App;
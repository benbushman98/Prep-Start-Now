import { extendTheme } from "@chakra-ui/react";


export const prepStartNow = extendTheme({
    colors: {
        darkblue: "#003043",
        blue: "#023859",
        gray: "#47SF6F",
        ember: "#FFB900",
        lightgray: "#F2F2F2",

    }
})

export default App;

// import { Box } from "@chakra-ui/react"

// // picks up a nested color value using dot notation
// // => `theme.colors.gray[50]`
// <Box color='gray.50' />

// // raw CSS color value
// <Box color='#f00' />

// // background colors
// <Box bg='tomato' />

// // verbose prop
// <Box backgroundColor='tomato' />






// // 1. Import `extendTheme`
// import { extendTheme } from "@chakra-ui/react"

// // 2. Call `extendTheme` and pass your custom values
// const theme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// })

// // 3. Pass the new theme to `ChakraProvider`
// <ChakraProvider theme={theme}>
//   <App />
// </ChakraProvider>

// // 4. Now you can use these colors in your components
// function Usage() {
//   return <Box bg="brand.100">Welcome</Box>
// }
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Center,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
// import Logo from './logo.png'

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="8" justify="center">
            {isDesktop ? (
              <Flex justify="center" flex="1">
                <ButtonGroup variant="link" spacing="10">
                  <Center w="100%">
                    {['Featured Brands', 'Electronics', 'Food Storage/72-hour Kits', 'Household Essentials', 'Auto Industrial', 'Promotions', 'Health & Safety', 'Resource Center'].map((item) => (
                      <Button spacing="8" m={6} key={item}>{item}</Button>
                    ))}
                  </Center>
                </ButtonGroup>
              </Flex>

            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
export default Header;
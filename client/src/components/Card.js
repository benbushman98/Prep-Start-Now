import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, Wrap } from '@chakra-ui/react'
import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
    Center,
    ModalCloseButton
  } from '@chakra-ui/react'


function DisplayCard(props) {

    // function sendToCart() {
    //     // Add logic that sends the item to the cart
    // }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Wrap spacing='20px' justify={'center'}>
                {props.items.map(item => (

                    <Card key={item._id} maxW='sm' minW='sm' align="center" bg="white"  opacity= "0.9" padding={'10px'}>
                        <CardBody >

                            <Image
                                src={`images/${item.image}`}
                                alt={item.name}
                                borderRadius='lg'
                                height={'300px'}

                                width={'auto'}
                                justify={'center'}
                                align="center"
                                display="block"
                                marginLeft="auto"
                                marginRight="auto"

              />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{item.name}</Heading>
                                <Text>
                                    {item.description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${item.price}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {item.quantity} in stock
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                                <Button colorScheme='blue' onClick={onOpen}>
                                    Add to cart
                                </Button>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    
                                    <ModalContent>
                                        <ModalBody p={5}>
                                            <ModalCloseButton />
                                            <Center>
                                                Item added!
                                            </Center>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>
                        </CardFooter>
                    </Card>
                ))}
            </Wrap>
        </div>
    );
}

export default DisplayCard;
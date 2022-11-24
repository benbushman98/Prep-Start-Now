import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Wrap } from '@chakra-ui/react'


function DisplayCard(props) {

    return (
        <div>
            <Wrap spacing='20px' justify={'center'}>
                {props.items.map(item => (
                    <Card maxW='sm' minW='sm' align="center" bg="white"  opacity= "0.9">
                        <CardBody>
                            <Image
                                src={`images/${item.image}`}
                                alt={item.name}
                                borderRadius='lg'
                                height={'200px'}

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
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Wrap>
        </div>
    );
}

export default DisplayCard;
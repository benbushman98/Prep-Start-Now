import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, propNames } from '@chakra-ui/react'




function DisplayCard(props) {
    return (
        <div>
            {props.items.map(item => (
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={item.imageURL}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.name}</Heading>
                            <Text>
                                {item.text}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                ${item.price}
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
        </div>
    );
}

export default DisplayCard;
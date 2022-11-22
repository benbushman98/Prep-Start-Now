import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Wrap } from '@chakra-ui/react'


function DisplayCard(props) {
    const {
        image,
        name,
        description,
        // _id,
        price,
        quantity
      } = props;

    return (
        <div>
            <Wrap spacing='20px'>
                {props.items.map(item => (
                    <Card maxW='sm' minW='sm' align="center">
                        <CardBody>
                            <Image
                                src={`images/${image}`}
                                alt={name}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{name}</Heading>
                                <Text>
                                    {description}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    ${price}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {quantity} in stock
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
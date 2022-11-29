import { Tr, Td, Input, Button } from '@chakra-ui/react'

function CartRow (props) {

    return (
        <>
        {props.items.map(item => (
        <Tr key={item._id}>
            <Td fontSize={{ base: "10px", md: "12px", lg: "16px" }}>{item.name}</Td>
            <Td fontSize={{ base: "10px", md: "12px", lg: "16px" }}>${item.price}</Td>
            <Td><Input placeholder='1' size='xs' w='10%' minWidth={'25px'} /></Td>
            {/* need to figure out how to edit quantity^^ */}
            <Td fontSize={{ base: "10px", md: "12px", lg: "16px" }}><Button colorScheme='blue'>Delete</Button></Td>
            {/* need to get delete button functional^^ */}
        </Tr>
        ))}

        </>
    );
}

export default CartRow;
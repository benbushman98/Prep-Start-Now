import { Tr, Td, Input, Button } from '@chakra-ui/react'

function CartRow (props) {

    return (
        <>
        {props.items.map(item => (
        <Tr key={item._id}>
            <Td>{item.name}</Td>
            <Td>${item.price}</Td>
            <Td><Input placeholder='1' size='xs' w='10%'/></Td>
            {/* need to figure out how to edit quantity^^ */}
            <Td><Button colorScheme='blue'>Delete</Button></Td>
            {/* need to get delete button functional^^ */}
        </Tr>
        ))}

        </>
    );
}

export default CartRow;
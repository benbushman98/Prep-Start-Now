import React from 'react';
import { Text, Stack, Input } from '@chakra-ui/react'

const Signup = () => {
    return (
        <Stack spacing={3} backgroundColor='#FFF'>
            <Text>Signup</Text>
            <Input placeholder='First Name' size='md' />
            <Input placeholder='Last Name' size='md' />
            <Input placeholder='Email' size='md' />
            <Input placeholder='Password' size='md' />
        </Stack>
    )
}

export default Signup;
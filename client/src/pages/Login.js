import React from 'react';
import { Text, Stack, Input } from '@chakra-ui/react'

const Login = () => {
    return (
        <Stack spacing={3} backgroundColor='#FFF'>
            <Text>Login</Text>
            <Input placeholder='Email' size='md' />
            <Input placeholder='Password' size='md' />
        </Stack>
    )
}

export default Login;
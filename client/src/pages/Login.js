import React, { useState } from 'react';
import { Button, Text, Stack, Input } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import auth from '../utils/auth';


const Login = () => {
    //THIS SETS UP THE STATES FOR THE INPUTS(EMAIL AND PASSWORD)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //USES MUTATION TO LOG IN
  const [login] = useMutation(LOGIN);

  //SETS UP THE FORM FUNCTIONALITY
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(email, password);
    const mutationResponse = await login({
      variables: {
        email: email,
        password: password,
      },
    });
    const token = mutationResponse.data.login.token;
    auth.login(token);
  };
  
//CAPTURES THE DATA PROVIDED BY THE USER FOR EACH INPUT FIELDS
  return (
    <Stack spacing={3} mx={20} p={5} backgroundColor="#FFF">
      <Text fontSize={30} fontWeight="bold">LOGIN</Text>
      <form onSubmit={handleFormSubmit}>
      <Input placeholder="Email" size="md" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input mt={3} placeholder="Password" size="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button mt={3} colorScheme='blue'>Log-in</Button>
      </form>
    </Stack>
  );
};

export default Login;

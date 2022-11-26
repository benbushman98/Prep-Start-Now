import React, { useState } from 'react';
import { Text, Stack, Input } from '@chakra-ui/react';
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
    <Stack spacing={3} backgroundColor="#FFF">
      <Text>Login</Text>
      <form onSubmit={handleFormSubmit}>
      <Input placeholder="Email" size="md" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input placeholder="Password" size="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button>Log In</button>
      </form>
    </Stack>
  );
};

export default Login;

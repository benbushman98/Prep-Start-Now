import React, { useState } from 'react';
import { Text, Stack, Input } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
import { ADD_CUSTOMER } from '../utils/mutations';
import auth from '../utils/auth';

const Signup = () => {
    //THIS SETS UP THE STATES FOR THE INPUTS(EMAIL, FN, LN AND PASSWORD)
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    //USES MUTATION TO ADD CUSTOMER
  const [addCustomer] = useMutation(ADD_CUSTOMER);

  //SETS UP THE FORM FUNCTIONALITY
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(email, firstName, lastName, password)
    const mutationResponse = await addCustomer({
      variables: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    });
    const token = mutationResponse.data.addCustomer.token;
    auth.login(token);
  };

 
//SETS THE DATA USER PROVIDED FOR EACH INPUT FIELDS
    return (
        <Stack spacing={3} backgroundColor='#FFF'>
            <Text>Signup</Text>
            <form onSubmit={handleFormSubmit}>
            <Input placeholder='First Name' size='md' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input placeholder='Last Name' size='md' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <Input placeholder='Email' size='md' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='Password' size='md' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Sign Up</button>
            </form>
        </Stack>
    )
}

export default Signup;
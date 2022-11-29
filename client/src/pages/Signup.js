import React, { useState } from 'react';
import { Text, Stack, Input } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
import { ADD_CUSTOMER } from '../utils/mutations';
import auth from '../utils/auth';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Center,
  ModalCloseButton
} from '@chakra-ui/react'

const Signup = () => {

  const styles = {
    button: {
        background: 'rgb(44,116,185)',
        borderRadius: 6,
        padding: '8px 18px',
        color: 'white',
        marginTop: '10px',
        fontWeight: '500'
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  //THIS SETS UP THE STATES FOR THE INPUTS(EMAIL, FNAME, LNAME AND PASSWORD)
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

 
//CAPTURES THE DATA PROVIDED BY THE USER FOR EACH INPUT FIELDS
    return (
      <Stack spacing={3} mx={20} p={5} backgroundColor='#FFF'>
          <Text fontSize={30} fontWeight="bold">SIGNUP</Text>
          <form onSubmit={handleFormSubmit}>
            <Input type="name" placeholder='First Name' size='md' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input mt={3} type="name" placeholder='Last Name' size='md' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <Input mt={3} type="email" placeholder='Email' size='md' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input mt={3} type="password" placeholder='Password' size='md' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button style={styles.button} onClick={onOpen}>Sign-up</button>
              <Modal isOpen={isOpen} onClose={onClose}>                   
                <ModalContent>
                    <ModalBody p={5}>
                        <ModalCloseButton />
                        <Center>
                            Success!
                        </Center>
                    </ModalBody>
                </ModalContent>
              </Modal>
          </form>
      </Stack>
    )
}

export default Signup;
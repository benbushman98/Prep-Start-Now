import React, { useState } from 'react';
import { Text, Stack, Input } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import auth from '../utils/auth';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Center,
  ModalCloseButton
} from '@chakra-ui/react'


const Login = () => {

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
        <Input placeholder="Email" type={"email"} size="md" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input mt={3} type="password" placeholder="Password" size="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button style={styles.button} onClick={onOpen}>Log-in</button>
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
  );
};

export default Login;

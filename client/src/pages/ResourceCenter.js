import React from 'react';
import { Flex,Center, } from '@chakra-ui/react';

const ResourceCenter = () => {
    return (
        <Flex justify={'center'}>
        <div style={{
            backgroundColor: 'white',
            width: '300px',
            opacity: '0.9',
            borderRadius: '12px',

        }}
        >
            <Center color={'black'} fontSize={{ base: '35px', sm: '50px', md: '50px', lg: '56px' }} as='b' align={'center'}>
                Coming Soon!
            </Center>
            <ul style={{
                textAlign: 'center',
                listStyle: "none",

            }}>
                <li>Preparedness Blog</li>
                <li>Preparedness Podcast</li>
                <li>Free Preparedness GuideBook</li>
            </ul>

            <h2 style={{
                fontSize: '30px',
                textAlign: 'center',
                color: "#FFB900",


            }}>Come back soon to get more features!</h2>
        </div>
        </Flex>
    )
}

export default ResourceCenter;
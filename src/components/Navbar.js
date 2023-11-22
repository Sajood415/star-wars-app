import React from 'react'
import { Box, Heading  } from '@chakra-ui/react';


const Navbar = () => {
    return (
        <Box p={4} bg="gray.800">
            <Heading as="h1" fontSize="2xl" textAlign="center" color="white">
                Star Wars App
            </Heading>
        </Box>)
}

export default Navbar
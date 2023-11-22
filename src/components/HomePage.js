import React from 'react';
import { Box, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import { GiFilmProjector, GiPerson, GiEarthAmerica } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/action';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Films', icon: <GiFilmProjector size={32} />, path: 'films' },
  { name: 'People', icon: <GiPerson size={32} />, path: 'people' },
  { name: 'Planets', icon: <GiEarthAmerica size={32} />, path: 'planets' },
];

const HomePage = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (path) => {
    dispatch(setCategory(path));
  };

  return (
    <Box bg="blue.500" h="100vh" color="white">
      <Flex justify="center" align="center" h="70%">
        <SimpleGrid columns={3} spacing={8} w="80%">
          {categories.map((category) => (
            <Link key={category.name} to={`/${category.path}`} onClick={() => handleCategoryClick(category.path)}>
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                textAlign="center"
                cursor="pointer"
              >
                {category.icon}
                <Text mt={4} fontSize="lg">{category.name}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default HomePage;

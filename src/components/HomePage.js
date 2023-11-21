import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { GiFilmProjector, GiPerson, GiEarthAmerica } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/action';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Films', icon: <GiFilmProjector />, path: 'films' },
  { name: 'People', icon: <GiPerson />, path: 'people' },
  { name: 'Planets', icon: <GiEarthAmerica />, path: 'planets' },
];

const HomePage = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (path) => {
    dispatch(setCategory(path));
  };

  return (
    <Box>
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
            <Text mt={2}>{category.name}</Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default HomePage;

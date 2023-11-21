import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { setSubItems, setLoading } from '../redux/action';
import axios from 'axios';

const PeoplePage = () => {
  const dispatch = useDispatch();
  const { category, subItems, loading } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const response = await axios.get(`https://swapi.dev/api/people/`);

        dispatch(setSubItems(response.data.results));
      } catch (error) {
        console.error('Error fetching people data:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [category, dispatch]);

  return (
    <Box>
      {loading ? (
        <Spinner size="xl" />
      ) : subItems.length === 0 ? (
        <Text>No people data available</Text>
      ) : (
        subItems.map((item) => (
          <Box key={item.name} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Text>Name: {item.name}</Text>
            <Text>Height: {item.height}</Text>
          </Box>
        ))
      )}
    </Box>
  );
};

export default PeoplePage;

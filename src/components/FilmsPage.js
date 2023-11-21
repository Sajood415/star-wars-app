import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { setSubItems, setLoading } from '../redux/action';
import axios from 'axios';

const FilmsPage = () => {
  const dispatch = useDispatch();
  const { category, subItems, loading } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(`https://swapi.dev/api/films/`);
        dispatch(setSubItems(response.data.results));
      } catch (error) {
        console.error('Error fetching films data:', error);
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
        <Text>No films data available</Text>
      ) : (
        subItems.map((item) => (
          <Box key={item.episode_id} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Text>Title: {item.title}</Text>
            <Text>Director: {item.director}</Text>
          </Box>
        ))
      )}
    </Box>
  );
};

export default FilmsPage;

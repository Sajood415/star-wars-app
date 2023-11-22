import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Spinner, Text, Flex, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, SimpleGrid } from '@chakra-ui/react';
import { setSubItems, setLoading } from '../redux/action';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  }, [dispatch]);

  return (
    <Box bg="blue.500" h="100vh" color="white">
      {category && (
        <Breadcrumb spacing="8px" separator="-" p={4} bg="gray.700">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>{category}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
      <Flex direction="column" align="center" justify="center" h="100%">
        {loading ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : subItems.length === 0 ? (
          <Text>No films data available</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {subItems.map((item) => (
              <Box
                key={item.episode_id}
                p={4}
                m={4}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="gray.800"
                boxShadow="xl"
              >
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {item.title}
                </Text>
                <Text>
                  <strong>Director:</strong> {item.director}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Box>
  );
};

export default FilmsPage;

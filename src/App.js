// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import FilmsPage from './components/FilmsPage';
import PeoplePage from './components/PeoplePage';
import PlanetsPage from './components/PlanetsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;

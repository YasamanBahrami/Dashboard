import React from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import { Box, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../src/Components/Sidebar';

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar/>
        <Box flex="1" display="flex" flexDirection="column">
          <Navbar />
          <Toolbar />
          <Box p={3}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

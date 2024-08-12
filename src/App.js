import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'

import './App.css'
import ExerciseDetail from './Pages/ExerciseDetail.js';
import Home from './Pages/Home.js';
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m='auto' >
        <NavigationBar/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/exercises/:id" element={ <ExerciseDetail/> } />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App
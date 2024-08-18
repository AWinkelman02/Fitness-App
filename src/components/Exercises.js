import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { fetchData, exerciseParams } from '../utils/FetchData';

import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, muscle, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const theme = createTheme({
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: '#e1e8ea',  // Regular page number color
          },
          outlined: {
            borderColor: '#e1e8ea',  // Outlined page button border color
          },
          textPrimary: {
            '&.Mui-selected': {
              backgroundColor: '#196c8a',  // Active page button color
              color: '#e1e8ea',
            },
          },
        },
      },
    },
  });
  
  const paginate = (e, value) => {
    console.log(value)
    setCurrentPage(value);
    window.scrollTo({ top: 1300, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseD = [];
      
      exerciseD = await fetchData(`https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises/muscle/${muscle}`, exerciseParams);
      setExercises(exerciseD)
    }

    fetchExercisesData()
  }, [muscle])

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px' >
      <Typography variant='h3' mb='46px' color='#e1f9f5'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' }}} flexWrap='wrap' justifyContent='center' >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center' >
          {exercises.length > exercisesPerPage && (
            <ThemeProvider theme={theme}>
              <Pagination
                color='primary' defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} 
                onChange={paginate} size='large'/>
            </ThemeProvider>
          )}
      </Stack>
    </Box>
  )
}

export default Exercises
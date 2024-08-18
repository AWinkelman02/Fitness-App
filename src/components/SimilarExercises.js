import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from '../components/ExerciseCard.js'
import { getRandomItems } from '../utils/GetRandItems.js'

const SimilarExercises = ({ targetData, equipmentData }) => {
  let targetDataShort = [];
  let equipmentDataShort = [];
  const num = 3;
  
  if(targetData.length === 1){targetDataShort = targetData };
  if(targetData.length < 4){
    targetDataShort = targetData 
  } else {
    targetDataShort = getRandomItems(targetData, num);
  }

  if(equipmentData.length === 1){equipmentDataShort = equipmentData };
  if(equipmentData.length < 4){
    equipmentDataShort = equipmentData 
  } else {
    equipmentDataShort = getRandomItems(equipmentData, num);
  }

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
      <Typography variant='h3' mb={5} mt={5} color='#e1e8ea' >
        Exercises that target the same primary muscle
      </Typography>
        <Stack direction='row' sx={{ P: '2', position: 'relative' }} justifyContent='space-around' >
          {targetDataShort.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
      <Typography variant='h3' mb={5} mt={5} color='#e1e8ea' >
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{ P: '2', position: 'relative' }} justifyContent='space-around' >
        {equipmentDataShort.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
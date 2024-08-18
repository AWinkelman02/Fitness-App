import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Loader from '../components/Loader.js';
import Footer from '../components/Footer'

import { fetchData, exerciseParams } from '../utils/FetchData.js'
import Detail from '../components/Detail.js';

import SimilarExercises from '../components/SimilarExercises.js';

const ExerciseDetail = () => {
  const { id } = useParams()
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetData, setTargetData] = useState([]);
  const [equipmentData, setEquipmentDataData] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercise-db-fitness-workout-gym.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseParams)
      setExerciseDetail(exerciseDetailData);

      let muscle = exerciseDetailData.primaryMuscles[0]
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/muscle/${muscle}`, exerciseParams);
      setTargetData(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseParams);
      setEquipmentDataData(equipmentExercisesData)
    }

    fetchExercisesData()
  }, [id])

  if(JSON.stringify(exerciseDetail) === '{}'){
    return (
      <Box bgcolor='#060a0c' >
        <Loader />
        <Footer />
      </Box>
    )
  } else {
    return (
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <SimilarExercises targetData={targetData} equipmentData={equipmentData} />
        <Footer />
      </Box>
    )
  }
}

export default ExerciseDetail
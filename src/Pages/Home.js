import React, { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import Footer from '../components/Footer'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscle] = useState('quadriceps');

  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} muscle={muscle} setMuscle={setMuscle} />
        <Exercises setExercises={setExercises} muscle={muscle} exercises={exercises} />
        <Footer />
    </Box>
  )
}

export default Home
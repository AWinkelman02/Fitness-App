import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material';
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

const ExerciseCard = ({ exercise }) => {
  return (
    <Card  className="py-4 exercise-card ecard" >
      <Link className='exercise-card' to={`/exercises/${exercise.id}`} onClick={()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }) }} >
        <CardBody>
          <Image src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exercise.id}/0.jpg`} alt={exercise.name} shadow="md" width="100%" height= '326px'
          style={{ objectFit: 'cover' }} />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start" >
          <Stack direction='row' >
            <Button sx={{ ml: '21px', color: '#FFF', background: '#9ccee0', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} >
              {exercise.primaryMuscles[0]}
            </Button>
            <Button sx={{ ml: '21px', color: '#FFF', background: '#196c8a', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }} >
              {exercise.level}
            </Button>
          </Stack>
          <Typography ml='21px' color='#e1f9f5' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px' >
              {exercise.name}
          </Typography>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default ExerciseCard
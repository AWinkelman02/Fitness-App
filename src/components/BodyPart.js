import React from 'react'
import { Stack, Typography, } from '@mui/material';
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

import icon from '../assets/icons/gym.png'

const BodyPart = ({ item, muscle, setMuscle }) => {
  return (
    <Card className='bodyPart-card'>
      <Stack type='button' alignItems='center' justifyContent='center'
        sx={{
            backgroundColor: '#84e8da',
            cursor: 'pointer',
            gap: '47px',
            width: '270px',
            height: '280px',
            borderTop: muscle === item ? '4px solid #35bff0' : ''
        }}
        onClick={() => {
            setMuscle(item);
            window.scrollTo({ top: 1800, behavior: 'smooth' })
        }} >
        <img src={icon} alt='dumbell' style={{ width: '40px', height: '40px' }} />
        <Typography fontSize='24px' fontWeight='bold' color='#e1f9f5' textTransform='capitalize' >{item}</Typography>
      </Stack>
    </Card>
  )
}

export default BodyPart
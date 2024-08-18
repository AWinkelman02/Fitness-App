import React from 'react';
import { Box, Typography } from '@mui/material';
import {Button} from "@nextui-org/button";

import HeroBannerImage from '../assets/images/banner.jpg';
import '../App.css'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
        }} position='relative' p='20px' >
        <Typography color='#35bff0' fontWeight='600' fontSize='40px'>
            Exercise Discovery
        </Typography>
        <Typography fontWeight='700'
        sx={{ fontSize: { lg: '35px', xs: '30px' } }}
        mb= '23px' mt='30px' color='#e1f9f5'
        >
            Sweat, Smile <br/> And Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4} color='#e1f9f5'>
            Check out the most effective exercises
        </Typography>
        <Button variant='shadow' className='primary font-sans' href='#exercises' css onClick={()=>{window.scrollTo({ top: 1000, behavior: 'smooth' })}}
        >Explore Exercises</Button>
        <Typography fontWeight='600' color='#196c8a' sx={{
            opacity: '0.5',
            display: { lg: 'block', xs: 'none' }
        }} fontSize='200px'
        >Exercise</Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
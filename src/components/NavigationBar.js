import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const NavigationBar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '40px' }, pt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px='20px' alignItems='center' >
        <Link to='/Fitness-App'>
            <img src={Logo} alt='logo' style={{width: '48px', height: '48px', margin: '0 20px' }} />
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end' >
            <Link to='/Fitness-App' style={{textDecoration: 'none', color:'#e1e8ea', borderBottom: '3px solid #35bff0', fontFamily: 'Josefin Sans' }} >Home</Link>
            <a href='/Fitness-App/#exercises' style={{textDecoration: 'none', color:'#e1e8ea', borderBottom: '3px solid rgba(0, 0, 0, 0)' }}  >Exercises</a>
        </Stack>
    </Stack>
  )
}

export default NavigationBar
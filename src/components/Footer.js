import React from 'react'
import { Box, Stack, Typography} from '@mui/material';

import Github from '../assets/icons/github.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#060a0c'>
      <Stack gap='10px' alignItems='center' px='40px' pt='24px' direction='column'>
        <a href='https://github.com/AWinkelman02/Fitness-App' >
          <img src={Github} alt='github' className='github-icon' />
        </a>
        <Typography variant='h8' pb='40px' mt='20px' color='#9ccee0'>
          ALEC WINKELMAN ©2024
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
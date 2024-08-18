import React from 'react';
import { Stack, Button, Typography } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    let instructions = [];

    for (let i = 0; i < exerciseDetail.instructions.length; i++) {
        let ins = {
            index: i + 1,
            instruction: exerciseDetail.instructions[i]
        }
        instructions.push(ins);
    }

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: exerciseDetail.category,
        },
        {
            icon: TargetImage,
            name: exerciseDetail.level,
        },
        {
            icon: EquipmentImage,
            name: exerciseDetail.equipment,
        },
    ]

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'start'}} >
           <img src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exerciseDetail.id}/0.jpg`} alt={exerciseDetail.name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: {lg: '35px', xs: '20px'}}} >
                <Typography variant='h3' color='#9ccee0' >
                    {exerciseDetail.name}
                </Typography>
                <Typography variant='h5' color='#35bff0' >
                    Instructions
                </Typography>
                {instructions.map((detail) => (
                    <Typography key={detail.index} variant='h6' color='#e1e8ea' >
                        {detail.index}. {detail.instruction}
                    </Typography>
                ))}
                <Stack direction='row' gap='30px'>
                    {extraDetail.map((item) => (
                        <Stack key={item.name} direction='row' gap='15px' alignItems='center' >
                            <Button sx={{ background: '#196c8a', borderRadius: '50%', width: '65px', height: '65px' }} >
                                <img src={item.icon} alt={exerciseDetail.primaryMuscles[0]} style={{ width: '40px', height: '40px' }} />
                            </Button>
                            <Typography variant='h5' textTransform='capitalize' color='#e1e8ea' >
                                {item.name}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Detail
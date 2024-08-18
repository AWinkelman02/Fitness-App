import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem , Button} from "@nextui-org/react";

import { fetchData, exerciseParams } from '../utils/FetchData';
import { equipmentFilter, muscleFilter, levelFilter } from '../utils/FetchFilters.js';

const SearchExercises = ({ setExercises, muscle, setMuscle }) => {
 
    const [selectedKeys, setSelectedKeys] = useState(new Set(["quadriceps"]));
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    console.log(selectedValue)

    const handleSearch = async (list, filter) => {
        const ed = await fetchData(`https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises/${list}/${filter}`, exerciseParams);
        setExercises(ed);
    }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight='700' sx={{
           fontSize: { lg: '44px', xs: '30px' }
        }} mb='50px' textAlign='center' color='#e1e8ea' >
            Awesome Exercises You<br /> Should Know
        </Typography>
        <div className='search-filters' >
            <Dropdown >
                <DropdownTrigger>
                    <Button variant="shadow" className='primary'>
                        Select Muscle
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    onAction={(key) => {
                        handleSearch('muscle', key)
                        window.scrollTo({ top: 1200, behavior: 'smooth' })}}>
                    {muscleFilter.map((item) => (
                        <DropdownItem key={item} style={{ textTransform: 'capitalize' }} >{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="shadow" className='primary'>
                        Select Equipment
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}                   
                    onAction={(key) => {handleSearch('equipment', key)
                        window.scrollTo({ top: 1200, behavior: 'smooth' })}}>
                    {equipmentFilter.map((item) => (
                        <DropdownItem key={item} style={{ textTransform: 'capitalize' }}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="shadow" className='primary'>
                        Select Level
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}               
                    onAction={(key) => {handleSearch('level', key)
                        window.scrollTo({ top: 1200, behavior: 'smooth' })}}>
                    {levelFilter.map((item) => (
                        <DropdownItem key={item} style={{ textTransform: 'capitalize' }}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    </Stack>
  )
}

export default SearchExercises
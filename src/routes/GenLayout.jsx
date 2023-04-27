import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import PatientsFinder from '../apis/PatientsFinder'
import Navbar from '../Components/NavbarStuff/Navbar'

function GenLayout() {


  return (
    <>
    <Box>
        {/* Stacks is elements one after the other*/}
        <Navbar/>
        <Stack direction={"row"} p={2} spacing = {2} justifyContent = "space-around">
          <Typography variant='h4'>Logo 1</Typography>
          <Typography variant='h3'>Alma Stuff</Typography>
          <Typography variant='h4'>Logo 2</Typography>

          
        </Stack>

        <Divider/>
    </Box>

  

    <Outlet />
    </>
  )
}

export default GenLayout
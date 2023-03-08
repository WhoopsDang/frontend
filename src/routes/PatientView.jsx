import { Box, Stack } from '@mui/material'
import React from 'react'
import Form from '../Components/FormComponents/Form'
import Navbar from '../Components/NavbarStuff/Navbar'

function PatientView() {
  return (
    <Box>
        {/* Stacks is elements one after the other*/}
        <Navbar/>
        <Stack direction={"row"} p={2} spacing = {2} justifyContent = "space-between">
            <Form isView = {true}/>
        </Stack>
    </Box>
  )
}

export default PatientView
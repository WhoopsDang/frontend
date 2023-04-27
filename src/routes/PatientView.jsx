import { Box, Stack } from '@mui/material'
import React from 'react'
import Form from '../Components/FormComponents/Form'

function PatientView() {
  return (
    <Box>
        {/* Stacks is elements one after the other*/}
        <Stack direction={"row"} p={2} spacing = {2} justifyContent = "space-between">
            <Form isView = {true}/>
        </Stack>
    </Box>
  )
}

export default PatientView
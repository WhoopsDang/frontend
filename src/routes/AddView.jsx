import { Box, Stack } from '@mui/material'
import React from 'react'
import Form from '../Components/FormComponents/Form'
import Navbar from '../Components/NavbarStuff/Navbar'
import { PatientsContextProvider } from '../context/PatientsContext'

function AddView() {
  return (
    <PatientsContextProvider>
      <Box>
          {/* Stacks is elements one after the other*/}
          <Stack direction={"row"} p={2} spacing = {2} justifyContent = "space-between">
              <Form isView = {false} />
          </Stack>
      </Box>
    </PatientsContextProvider>
  )
}

export default AddView
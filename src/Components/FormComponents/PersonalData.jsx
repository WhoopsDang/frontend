import { Box, styled, TextField, Typography } from '@mui/material'
import React from 'react'
 

const StyledBox = styled(Box)({
    display:'flex',
    flexDirection: 'row',
    padding: 5
    
  
  })

  const disableBlack = {padding:1, "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000000",
}}

  


function PersonalData({handleChange, p, isDisabled}) {
  return (
    <>
    {/* Title */}
        <Box display={'flex'} flexDirection ={'row'} justifyContent ={'center'} p={3}>
          
          <Typography variant='h4' fontWeight={'500'}>Nota Medica</Typography>
      
        </Box>
        {/*Name, Age, and Sex fields */}
        <StyledBox>
      
          <TextField
              name='nombre'
              value={p.nombre}
              label="Nombre"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:1}}
              size ={'small'}
              disabled = {isDisabled}
            />
            <TextField
              name='apellidos'
              value={p.apellidos}
              label="Apellidos"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:1}}
              size ={'small'}
              disabled = {isDisabled}
            />
            <TextField
              name='edad'
              value={p.edad}
              label="Edad"
              type={'number'}
              variant="outlined"
              onChange={handleChange}
              sx={{padding:1, "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            }}}
              size ={'small'}
              disabled = {isDisabled}
            />
            <TextField
              name='sexo'
              value={p.sexo}
              label="Sexo"
              variant="outlined"
              onChange={handleChange}
              sx={{padding:1, "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            }}}
              size ={'small'}
              disabled = {isDisabled}
            />
        </StyledBox>
        {/*Estado Civil, Religion, and Occupation fields */}
        <StyledBox>
        <TextField
              name='estado_civil'
              value={p.estado_civil}
              label="Estado Civil"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:1}}
              size ={'small'}
              disabled = {isDisabled}
            />
            <TextField
              name='religion'
              value={p.religion}
              label="Religion"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:1}}
              size ={'small'}
              disabled = {isDisabled}
            />
            <TextField
              name='ocupacion'
              value={p.ocupacion}
              label="Ocupacion"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:1}}
              size ={'small'}
              disabled = {isDisabled}
            />

        </StyledBox>
        <StyledBox>
            <TextField
              name='direccion'
              value={p.direccion}
              label="Direccion"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:1}}
              size ={'small'}
              disabled = {isDisabled}
            />
            <TextField
              name='ciudad'
              value={p.ciudad}
              label="Ciudad"
              variant="outlined"
              onChange={handleChange}
              sx={{...disableBlack, flexGrow:.5}}
              size ={'small'}
              disabled = {isDisabled}
            />
        </StyledBox>
    </>
  )
}   

export default PersonalData
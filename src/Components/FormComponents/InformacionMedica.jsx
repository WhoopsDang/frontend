import { Box, Checkbox, FormControlLabel, InputAdornment, styled, TextField, Typography } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
    display:'flex',
    flexDirection: 'row',
    padding: 5
    
  
  })

function InformacionMedica({handleChange, handleCheck, p, isDisabled}) {


  return (
    <>
        {/* Title */}
        <Box display={'flex'} flexDirection ={'row'} justifyContent ={'center'} p={3}>
          
          <Typography variant='h4' fontWeight={'500'}>Signos Vitales</Typography>
      
        </Box>
        {/* Units area, weight, height, artery pressure, cardiac, respitory, and temperature */}
        <StyledBox>
          <TextField
                name='peso'
                value={p.peso}
                label="Peso"
                type={'number'}
                variant="outlined"
                onChange={handleChange}
                sx={{padding:1}}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
                disabled = {isDisabled}
              />
              <TextField
                name='talla'
                value={p.talla}
                label="Talla"
                type={'number'}
                variant="outlined"
                onChange={handleChange}
                sx={{padding:1}}
                InputProps={{
                  endAdornment: <InputAdornment position='end'>cm</InputAdornment>,
                }}
                disabled = {isDisabled}
              />
              <TextField
                name='tension_arterial'
                value={p.tension_arterial}
                label="T/A"
                variant="outlined"
                onChange={handleChange}
                sx={{padding:1}}
                InputProps={{
                  endAdornment: <InputAdornment position="end">units</InputAdornment>,
                }}
                disabled = {isDisabled}
              />
              <TextField
                name='f_cardiaca'
                value={p.f_cardiaca}
                label="F. Cardiaca"
                type={'number'}
                variant="outlined"
                onChange={handleChange}
                sx={{padding:1}}
                InputProps={{
                  endAdornment: <InputAdornment position="end">units</InputAdornment>,
                }}
                disabled = {isDisabled}
              />
              <TextField
                name='f_respiratoria'
                value={p.f_respiratoria}
                label="F. Respiratoria"
                type={'number'}
                variant="outlined"
                onChange={handleChange}
                sx={{padding:1}}
                InputProps={{
                  endAdornment: <InputAdornment position="end">units</InputAdornment>,
                }}
                disabled = {isDisabled}

              />
              <TextField
                name='temperatura'
                value={p.temperatura}
                label="Temperatura"
                type={'number'}
                variant="outlined"
                onChange={handleChange}
                sx={{padding:1}}
                InputProps={{
                  endAdornment: <InputAdornment position="end">C</InputAdornment>,
                }}
                disabled = {isDisabled}
              />

        </StyledBox>
        <StyledBox>
          <TextField
              name='alergias'
              value={p.alergias}
              label="Alergias"
              variant="outlined"
              onChange={handleChange}
              sx={{flexGrow: 1, padding:1}}
              size ={'small'}
              disabled = {isDisabled}
            />
          <TextField
            name='app'
            value={p.app}
            label="APP"
            variant="outlined"
            onChange={handleChange}
            sx={{flexGrow: 1, padding:1}}
            size ={'small'}
            disabled = {isDisabled}
          />
        </StyledBox>
        <StyledBox>
        <TextField
            name='motivo'
            value={p.motivo}
            label="Motivo de Consulta"
            variant="outlined"
            onChange={handleChange}
            sx={{flexGrow: 1, padding:1}}
            size ={'small'}
            disabled = {isDisabled}
          />
        </StyledBox>
        {/* Checkboxes */}
        <StyledBox>
        <FormControlLabel name = "estado_dental" onChange={handleCheck} sx={{flexGrow: 1}} control={<Checkbox />} value = {1} label="Dental" disabled = {isDisabled} />
        <FormControlLabel name = "estado_psicologia" onChange={handleCheck} sx={{flexGrow: 1}} control={<Checkbox />} value = {2} label="Psicologia" disabled = {isDisabled} />
        <FormControlLabel name = "estado_fisioterapia" onChange={handleCheck}sx={{flexGrow: 1}} control={<Checkbox />} value = {3} label="Fisioterapia" disabled = {isDisabled} />
        <FormControlLabel name = "estado_estiloDeVida" onChange={handleCheck}sx={{flexGrow: 1}} control={<Checkbox />} value = {4} label="Estilo de Vida/Nutricion" disabled = {isDisabled} />
        </StyledBox>
        <StyledBox>
        <TextField
          name='notas_extras'
          value={p.notas_extras}
          onChange={handleChange}
          label="Padecimiento actual"
          multiline
          rows={4}
          sx={{flexGrow: 1}}
          disabled = {isDisabled}
        />
        </StyledBox>
    </>
  )
}

export default InformacionMedica
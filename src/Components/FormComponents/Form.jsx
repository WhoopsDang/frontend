import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, FormGroup, Snackbar, styled} from '@mui/material'
import { Container } from '@mui/system';
import PersonalData from './PersonalData';
import InformacionMedica from './InformacionMedica';
import PatientsFinder from '../../apis/PatientsFinder';
import PatientModel from '../../models/patient';
import ModuleModel from '../../models/module';

const StyledBox = styled(Box)({
  display:'flex',
  flexDirection: 'row',
  padding: 5
})




const Form = (props) => {

  const [patient, setPatient] = useState(PatientModel);

  const [modules, setModules] = useState(ModuleModel)

  const [isDisabled, setIsDisabled] = useState(false)

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (props.isView === true){
      setIsDisabled(true)
      
    }
  
    
  }, [props.isView])
  
  
  
  const handleChange = (e) => {
    setPatient({...patient, [e.target.name]: e.target.value});
    
  };

  const handleCheck = (e) => {
    setModules({...modules, [e.target.name]: e.target.checked})

  }

  const handleClose = (e) =>{
    setIsSubmitted(false)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(patient);
    try {
      const response = await PatientsFinder.post("/", patient)
      console.log(response)
    } catch (err) {
      console.log(err)
    }

    setIsSubmitted(true)
    setPatient(PatientModel)
    setModules(ModuleModel)
  };
  return (
    <Container>
      {/* The entire form will fall under this form group component */ }
      <FormGroup component = 'fieldset'>
        <PersonalData handleChange={handleChange} p = {patient} isDisabled = {isDisabled} />

        <InformacionMedica handleChange={handleChange} handleCheck = {handleCheck} p = {patient} isDisabled = {isDisabled} />
        
        <StyledBox>
          <Box sx={{flexGrow:1}}></Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{margin:1}}
        >
          Submit
        </Button>
        </StyledBox>
        
        <Snackbar open={isSubmitted} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se ha guardado con exito!
        </Alert>
        </Snackbar>
      </FormGroup>
    </Container>
  )
}

export default Form

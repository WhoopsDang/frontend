import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, FormGroup, Snackbar, styled} from '@mui/material'
import { Container } from '@mui/system';
import PersonalData from './PersonalData';
import InformacionMedica from './InformacionMedica';
import PatientsFinder from '../../apis/PatientsFinder';
import StatesFinder from '../../apis/StatesFinder'
import PatientModel from '../../models/patient';
import ModuleModel from '../../models/module';
import { useParams, useSearchParams } from 'react-router-dom';

const StyledBox = styled(Box)({
  display:'flex',
  flexDirection: 'row',
  padding: 5
})




const Form = (props) => {

  const [msg, setMsg] = useState('se ha guardado con exito!')

  const [patient, setPatient] = useState(PatientModel);

  const [modules, setModules] = useState(ModuleModel)

  const [moduleList, setModuleList] = useState([])

  const [isDisabled, setIsDisabled] = useState(false)

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();


  const param = useParams()
  

  

  
  


  useEffect(() => {
    const fetchData = async() =>{
      try {
        console.log('in')
        const response = await PatientsFinder.get(`/${param.id}`)
        setPatient(response.data.data.patient)
        //console.log(response) 
      } catch (err) {
        
      }
    }
    //console.log(param)
    if (props.isView === true){
      setIsDisabled(true)
      
      
      fetchData() 
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param, props.isView])
  
  useEffect(() =>{
    setModuleList(moduleList.filter(i => i.paciente_id !== 0))
    setModuleList(old => [...old, modules])

  }, [modules])
  
  const handleChange = (e) => {
    setPatient({...patient, [e.target.name]: e.target.value});
  };

  const handleCheck = (e) => {
    console.log(e.target)
    if(e.target.checked){
      setModules({paciente_id: 1, modulo_id: e.target.value})
    }
    if(!e.target.checked){
      console.log('false')
      setModuleList(moduleList.filter(i => i.modulo_id !== e.target.value))

    }

    if(e === 1){

    }
    

  }

  const handleClose = async (e) =>{
    setIsSubmitted(false)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!isDisabled){
      try {
      
        const response = await PatientsFinder.post("/", patient).then(async (response) =>{
          console.log(response)
          
          await Promise.all(moduleList.map(async(m) =>{
            console.log(m)
            m.paciente_id = response.data.data.data.id
            await StatesFinder.post(`/?pId=${m.paciente_id}&mId=${m.modulo_id}`, m)
          }))
          
  
        })
        
        //console.log(response)
      } catch (err) {
        console.log(err)
      }
  
        
        setPatient(PatientModel)
        //handleCheck(1)
    }else{
      setMsg('Consulta con Paciente terminado, se ha eliminado de la cola')
      var param = searchParams.get("eId")
      await StatesFinder.put(`/inactive/${param}`)
      //console.log('change state logic')
    }
    
    setIsSubmitted(true)
      
  };

  


  return (
    <Container>
      {/* The entire form will fall under this form group component */ }
      <FormGroup component = 'fieldset'>
        <PersonalData handleChange={handleChange} p = {patient} m = {modules} isDisabled = {isDisabled} />

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
          {msg}
        </Alert>
        </Snackbar>
      </FormGroup>
    </Container>
  )
}

export default Form

import {React, useEffect, useState} from 'react'
import {List } from '@mui/material'
import Item from './Item'
import PatientsFinder from '../../../apis/PatientsFinder'


const ListPeople = () => {

  const [patients, setPatients] = useState([])
  //const [states, setStates] = useState([])

  useEffect(() =>{

    const fetchData = async() =>{
      try {
        const response = await PatientsFinder.get("/")
        setPatients(response.data.data.patients)
        console.log(response)
      } catch (err) {
        
      }
    }
    
    fetchData()

  }, [])

  const listOfItems = []
  patients.map(p =>(
    listOfItems.push(<Item key = {p.id} id = {p.id} fname = {p.nombre} lname = {p.apellidos} />)
    
  ))

  return (
      <List>
          {listOfItems}
      </List>
  )
}

export default ListPeople

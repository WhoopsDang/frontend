import {React, useEffect, useState} from 'react'
import {List } from '@mui/material'
import Item from './Item'
import PatientsFinder from '../../../apis/PatientsFinder'
import ModuleFinder from '../../../apis/ModuleFinder'

const ListPeople = () => {

  const [patients, setPatients] = useState([])

  const [modules, setModules] = useState([])

  let color;
  
  


  useEffect(() =>{

    const fetchData = async() =>{
      try {
        const response = await PatientsFinder.get("/activeColor")
        setPatients(response.data.data.patients)
        //console.log(mResponse) 
      } catch (err) {
        
      }
    }
    
    fetchData()

  }, [])

  
  const listOfItems = []
  patients.map(p =>(
    
    

    listOfItems.push(<Item key = {p.id} p = {p} fname = {p.nombre} lname = {p.apellidos} color = {p.color} />)
    
  ))

  return (
      <List>
          {listOfItems}
      </List>
  )
}

export default ListPeople

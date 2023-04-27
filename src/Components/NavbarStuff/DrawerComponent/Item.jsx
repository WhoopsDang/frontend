import {ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Person } from '@mui/icons-material'
import { Link as RouterLink, useNavigate} from 'react-router-dom'

function Item(props) {
  let navigate = useNavigate()

 
 
  const handleClick = () =>{
    navigate(`/getPatient/${props.p.paciente_id}`)
  }
  
 
  return (
    <>
    <ListItem onClick={() => {handleClick(props.id)}}>
      <ListItemButton>
        <ListItemIcon sx = {{paddingRight: "10px"}} style={{minWidth: '25px'}}>
          <Person style={{color: props.color}}/>
        </ListItemIcon>
      
        <ListItemText primary={props.fname + " " + props.lname} />
      </ListItemButton>
    </ListItem>

    </>
    
  )
}

export default Item
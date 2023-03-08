import {ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Person } from '@mui/icons-material'
import { Link as RouterLink} from 'react-router-dom'

function Item(props) {
 
  return (
    <>
    <ListItem>
      <ListItemButton component = {RouterLink} to= {`/getPatient/${props.id}`}>
        <ListItemIcon sx = {{paddingRight: "10px"}} style={{minWidth: '25px'}}>
          <Person style={{color: 'blueviolet'}}/>
        </ListItemIcon>
      
        <ListItemText primary={props.fname + " " + props.lname} />
      </ListItemButton>
    </ListItem>

    </>
    
  )
}

export default Item
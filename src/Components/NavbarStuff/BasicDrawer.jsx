import React from 'react'
import { Box, Drawer, IconButton, InputBase, styled} from '@mui/material'
import { useState } from 'react'
import{ Menu } from '@mui/icons-material'
import ListPeople from './DrawerComponent/ListPeople'
import { Link as RouterLink, useNavigate} from 'react-router-dom'


const BasicDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)

    let navigate = useNavigate()
    

 
 
    const handleClick = (id) =>{
        navigate("/")
    }

    const Search = styled("div")(({theme}) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width:"40%"
    }))

  return (
    <>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => {setIsOpen(true);handleClick()}}>
            <Menu/>
        </IconButton>
        <Drawer anchor = 'left' open={isOpen} onClose={() => setIsOpen(false)}>
            <Search><InputBase placeholder='Search'/></Search>
            <Box width='200px' textAlign='center' role='presentation'>
                <ListPeople/>

            </Box>
        </Drawer>
    </>
  )
}

export default BasicDrawer
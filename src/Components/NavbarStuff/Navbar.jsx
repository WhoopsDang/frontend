import { Flaky, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, Button, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicDrawer from './BasicDrawer';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})



const Icons = styled(Box)(({theme}) => ({
    display:"none",
    alignItems:"center",
    gap:"15px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))
const UserBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    gap:"15px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)

    


    return(
        //Total Navbar
        <AppBar position='sticky'>
            {/* Items in the Navbar */}
            <StyledToolbar>
                
                <BasicDrawer/>
                <Link to = "/recepcion" style={{textDecoration: 'none'}}>
                    <Button variant = "outline" sx={{color: 'white'}}>Recepcion</Button>
                </Link>

                <Flaky sx={{display: {xs:"block", sm:"none"}}}/>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar 
                    sx= {{width:30, height:25}}src='https://www.w3schools.com/howto/img_avatar.png'
                    onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar sx= {{width:30, height:25}}src='https://www.w3schools.com/howto/img_avatar.png'
                    onClick={e=>setOpen(true)}/>
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu  
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>

    )
}

export default Navbar
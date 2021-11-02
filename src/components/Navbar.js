import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ROUTES } from '../helpers/constants';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <MenuIcon />
          </IconButton>
          <IconButton 
            color='inherit' 
            component={Link} 
            to={ROUTES.home}>
              <HomeIcon/>
          </IconButton>
          <Button 
            sx={{marginLeft: 'auto'}} 
            color="inherit" 
            to={ROUTES.signIn} 
            component={Link}>Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
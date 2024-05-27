
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChromeLogo from '../images/logo.png'; 

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffff' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={ChromeLogo} alt="Chrome Logo" style={{ marginRight: '10px', height: '40px' }} />
          <Typography variant="h6" component="div">
            Chrome
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginLeft: '20px' ,fontWeight: 'bold' }}>
          <MenuItem sx={{ color: '#7D7C7C', position: 'relative', '&:hover::before': { content: '""', position: 'absolute', fontWeight: '700' ,top: '-5px', left: '-5px', right: '-5px', bottom: '-5px', border: '2px solid blue', borderRadius: '5px' } }}>Home</MenuItem>
          <MenuItem sx={{ color: '#7D7C7C', position: 'relative', '&:hover::before': { content: '""', position: 'absolute', fontWeight: '700' ,top: '-5px', left: '-5px', right: '-5px', bottom: '-5px', border: '2px solid blue', borderRadius: '5px' } }}>The Browser By Google</MenuItem>
          <MenuItem sx={{ color: '#7D7C7C', position: 'relative', '&:hover::before': { content: '""', position: 'absolute', fontWeight: '700' , top: '-5px', left: '-5px', right: '-5px', bottom: '-5px', border: '2px solid blue', borderRadius: '5px' } }}>Features</MenuItem>
          <MenuItem sx={{ color: '#7D7C7C', position: 'relative', '&:hover::before': { content: '""', position: 'absolute', fontWeight: '700' ,top: '-5px', left: '-5px', right: '-5px', bottom: '-5px', border: '2px solid blue', borderRadius: '5px' } }}>Support</MenuItem>
          </Box>
        </Box>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', md: 'none' ,fontWeight: 'bold'}, '& svg': { color: '#000' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              marginTop: '45px',
              backgroundColor: '#fff',
            },
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleMenuClose} sx={{ color: '#000' }}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#000' }}>Browser</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#000' }}>Support</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#000' }}>Help</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

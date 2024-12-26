// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, TextField, IconButton, Box } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';

const drawerWidth = 280; // Define drawerWidth here

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar>
      
        
          <TextField
            placeholder="Search…"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: <Search color="action" sx={{ mr: 1 }} />,
            }}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#bdbdbd',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3f51b5',
                },
              },
            }}
          />
        <IconButton>
          <Notifications />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

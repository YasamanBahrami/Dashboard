import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Button,
  Box,
  Typography,
  Avatar,
  TextField,
  Divider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/LocalActivity';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import TeamIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 280;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff', 
          borderRight: '1px solid #e0e0e0', 
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      
      {/* profile*/}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Avatar
          sx={{ width: 50, height: 50, mr: 2 }}
          src="path/to/profile.jpg" 
          alt="Yasaman"
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Yasaman Bahrami</Typography>
          <Typography variant="body2" color="textSecondary">yasrad7@yahoo.com</Typography>
        </Box>
      </Box>

      <Divider />

      {/*searcBar*/}
      <Box sx={{ p: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          size="small"
          InputProps={{
            startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
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
      </Box>

      <Divider />

      <List sx={{ px: 2 }}>
        {[
          { text: 'Home', icon: <HomeIcon />, color: '#1976d2' },
          { text: 'Campaign', icon: <CampaignIcon />, color: '#000000' },
          { text: 'Payments', icon: <PaymentIcon />, color: '#000000' },
          { text: 'Influencer', icon: <PeopleIcon />, color: '#000000' },
          { text: 'Settings', icon: <SettingsIcon />, color: '#000000' },
          { text: 'Password & Security', icon: <SecurityIcon />, color: '#000000' },
          { text: 'Team', icon: <TeamIcon />, color: '#000000' },
        ].map((item, index) => (
          <ListItem 
            button 
            key={item.text} 
            sx={{
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              marginBottom: '4px',
              color: item.color,
            }}
          >
            <ListItemIcon sx={{ color: item.color }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 2, mt: 'auto', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            backgroundColor: '#007bff',
            textTransform: 'none',
            py: 1.5,
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Upgrade Pro
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Become Pro Access
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

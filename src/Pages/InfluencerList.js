// InfluencerList.js
import React from 'react';
import { Card, CardContent, Typography, Avatar, Button, Box, List, ListItem, ListItemText } from '@mui/material';

const InfluencerList = () => {
  const influencers = [
    { name: 'Noah Venentino', followers: '2,890,080', avatar: 'path/to/avatar1.jpg' },
    { name: 'Xie Cai No', followers: '2,890,080', avatar: 'path/to/avatar2.jpg' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Influencer
        </Typography>
        <List>
          {influencers.map((influencer, index) => (
            <ListItem key={index} divider>
              <Avatar src={influencer.avatar} />
              <Box ml={2}>
                <ListItemText
                  primary={influencer.name}
                  secondary={`${influencer.followers} followers`}
                />
              </Box>
              <Button variant="outlined" sx={{ ml: 'auto' }}>
                Add to Campaign
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default InfluencerList;

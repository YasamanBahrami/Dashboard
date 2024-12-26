// RecentCampaignCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';

const RecentCampaignCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">
          Recent Campaign
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Blue Chips Chicago
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          Today, August 20, 2021 (10:06 PM)
        </Typography>
        <Typography variant="body2" color="primary">
          Active
        </Typography>
        <Box display="flex" mt={2} mb={2}>
          <Avatar sx={{ width: 24, height: 24 }} src="path/to/avatar1.jpg" />
          <Avatar sx={{ width: 24, height: 24, ml: -1 }} src="path/to/avatar2.jpg" />
          <Avatar sx={{ width: 24, height: 24, ml: -1 }} src="path/to/avatar3.jpg" />
        </Box>
        <Button variant="outlined" size="small">
          See Campaign Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecentCampaignCard;

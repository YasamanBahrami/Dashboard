// CampaignCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CampaignCard = () => {
  return (
    <Card sx={{ backgroundColor: '#007bff', color: '#fff', height: '100%' }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Let's create a campaign for your amazing brand!
        </Typography>
        <Typography variant="body2" mt={2}>
          Quis interdum vel nisi, eget molestie sit urna.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2, textTransform: 'none' }}>
          Go for it!
        </Button>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;

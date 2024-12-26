// InfluencerSearchCard.js
import React from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const InfluencerSearchCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Find Influencer for Your Campaign
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          We’re gonna help you to get influencers that match with your brand
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search username"
          fullWidth
          InputProps={{
            startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
          }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2, textTransform: 'none' }}>
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfluencerSearchCard;

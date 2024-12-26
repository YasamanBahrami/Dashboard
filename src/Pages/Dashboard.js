// Dashboard.js
import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, Button } from '@mui/material';
import CampaignCard from './CampaignCard';
import RecentCampaignCard from './RecentCampaignCard';
import InfluencerSearchCard from './InfluencerSearchCard';

// داده‌های تراکنش‌ها
const transactions = [
  { type: "Subscription Payment", date: "Today, August 20, 2021 (10:06 PM)", amount: "$1,200", icon: "🔴" },
  { type: "Influencer Income", date: "Today, August 20, 2021 (10:06 PM)", amount: "$1,200", icon: "🟢" },
  { type: "Influencer Income", date: "Today, August 20, 2021 (10:06 PM)", amount: "$1,200", icon: "🟢" },
];

// داده‌های اینفلوئنسرها
const influencers = [
  { name: "Noah Venentino", followers: "2,890,080", avatar: "https://via.placeholder.com/50", icons: ["🔵", "🟣", "🔴"] },
  { name: "Xie Cai No", followers: "2,890,080", avatar: "https://via.placeholder.com/50", icons: ["🔵", "🟣", "🔴"] },
  { name: "Zahra Aulia", followers: "2,890,080", avatar: "https://via.placeholder.com/50", icons: ["🔵", "🟣", "🔴"] },
];

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexGrow={1} overflow="auto" p={2}>
        <Grid container spacing={3}>
          {/* Top Row */}
          <Grid item xs={12} md={4}>
            <CampaignCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentCampaignCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfluencerSearchCard />
          </Grid>

          {/* Middle Row */}
          <Grid container spacing={3}>
            {/* Left - Last Transaction */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Last Transaction
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
                  >
                    See Details
                  </Typography>
                </Box>
                <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        padding: "15px",
                        borderRadius: "8px",
                        backgroundColor: "#fff5f5",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: "red", fontWeight: "bold" }}>
                        Expense
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        $12,801
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        padding: "15px",
                        borderRadius: "8px",
                        backgroundColor: "#f5fff5",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: "green", fontWeight: "bold" }}>
                        Income
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        $40,325
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        padding: "15px",
                        borderRadius: "8px",
                        backgroundColor: "#f5f7ff",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: "#007bff", fontWeight: "bold" }}>
                        Transaction
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        120 times
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  {transactions.map((transaction, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        borderBottom: index < transactions.length - 1 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {transaction.type}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {transaction.date}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {transaction.amount}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Right - Influencer */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                  Influencer
                </Typography>
                <Grid container spacing={2}>
                  {influencers.map((influencer, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "10px",
                        }}
                      >
                        <Avatar src={influencer.avatar} sx={{ width: 50, height: 50, marginBottom: "10px" }} />
                        <Typography variant="subtitle1">{influencer.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {influencer.followers} followers
                        </Typography>
                        <Box sx={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                          {influencer.icons.map((icon, i) => (
                            <span key={i}>{icon}</span>
                          ))}
                        </Box>
                        <Button variant="contained" color="primary" size="small" sx={{ marginTop: "10px" }}>
                          Add to Campaign
                        </Button>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

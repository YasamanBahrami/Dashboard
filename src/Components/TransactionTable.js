// src/components/TransactionTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

const transactions = [
  { description: "Subscription Payment", date: "2024-10-20", amount: "$1,200" },
  { description: "Influencer Income", date: "2024-10-21", amount: "$950" },
  { description: "Campaign Costs", date: "2024-10-22", amount: "$500" },
  { description: "Platform Fees", date: "2024-10-23", amount: "$75" },
];

const TransactionTable = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Recent Transactions
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography fontWeight="bold">Transaction</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Date</Typography></TableCell>
              <TableCell align="right"><Typography fontWeight="bold">Amount</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionTable;

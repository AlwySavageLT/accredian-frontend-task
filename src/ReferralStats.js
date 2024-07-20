import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function ReferralStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/referral-stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  if (!stats) return <Typography>Loading stats...</Typography>;

  return (
    <div>
      <Typography variant="h6">Total Referrals: {stats.totalReferrals}</Typography>
      <Typography variant="h6">Recent Referrals:</Typography>
      <List>
        {stats.recentReferrals.map((referral, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={`${referral.referrerName} - ${referral.course}`} 
              secondary={new Date(referral.createdAt).toLocaleDateString()} 
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ReferralStats;
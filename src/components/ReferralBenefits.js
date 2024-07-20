import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import ReferButton from './ReferButton';
import ReferralModal from '../ReferralModal';

const programs = [
  { name: 'Professional Certificate Program in Product Management', referrer: 7000, referee: 9000 },
  { name: 'PG Certificate Program in Strategic Product Management', referrer: 9000, referee: 11000 },
  { name: 'Executive Program in Data Driven Product Management', referrer: 10000, referee: 10000 },
  { name: 'Executive Program in Product Management and Digital Transformation', referrer: 10000, referee: 10000 },
  { name: 'Executive Program in Product Management', referrer: 10000, referee: 10000 },
  { name: 'Advanced Certification in Product Management', referrer: 10000, referee: 10000 },
  { name: 'Executive Program in Product Management and Project Management', referrer: 10000, referee: 10000 },
];

function ReferralBenefits() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Typography variant="h3" className="text-center mb-12 font-bold text-3xl">
          What Are The Referral Benefits?
        </Typography>
        <Paper elevation={3} className="overflow-hidden rounded-lg mb-12">
          <Table>
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell className="font-bold">Programs</TableCell>
                <TableCell align="right" className="font-bold">Referrer Bonus</TableCell>
                <TableCell align="right" className="font-bold">Referee Bonus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programs.map((program) => (
                <TableRow key={program.name} hover>
                  <TableCell component="th" scope="row">
                    {program.name}
                  </TableCell>
                  <TableCell align="right">₹ {program.referrer.toLocaleString()}</TableCell>
                  <TableCell align="right">₹ {program.referee.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <div className="text-center">
          <ReferButton handleOpen={handleOpen} />
        </div>
      </div>
      <ReferralModal open={open} handleClose={handleClose} />
    </section>
  );
}

export default ReferralBenefits;

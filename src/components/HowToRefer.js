import React, { useState } from 'react';
import { Typography, Paper } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReferButton from './ReferButton';
import ReferralModal from '../ReferralModal';

function HowToRefer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="py-16 bg-gray-50 h-screen overflow-y-auto">
      <div className="container mx-auto">
        <Typography variant="h3" className="text-center mb-12 font-bold text-3xl">
          How Do I Refer?
        </Typography>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: PersonAddIcon, title: "Submit referrals easily", desc: "Use our website's referral section" },
            { icon: EditNoteIcon, title: "Earn rewards", desc: "When your referral joins an Accredian program" },
            { icon: AccountBalanceWalletIcon, title: "Receive bonus", desc: "Both parties receive a bonus 30 days after enrollment" },
          ].map((step, index) => (
            <Paper key={index} elevation={2} className="p-8 text-center w-72">
              <step.icon className="text-6xl text-blue-500 mb-4" />
              <Typography variant="h6" className="mb-2 font-bold">{step.title}</Typography>
              <Typography variant="body2">{step.desc}</Typography>
            </Paper>
          ))}
        </div>
        <div className="text-center mt-12">
          <ReferButton handleOpen={handleOpen} />
        </div>
      </div>
      <ReferralModal open={open} handleClose={handleClose} />
    </section>
  );
}

export default HowToRefer;

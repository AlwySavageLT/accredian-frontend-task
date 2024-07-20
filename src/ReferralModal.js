import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Snackbar, Alert, CircularProgress } from '@mui/material';

function ReferralModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const tempErrors = {};
    tempErrors.referrerName = formData.referrerName ? '' : 'This field is required.';
    tempErrors.referrerEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referrerEmail)
      ? ''
      : 'Invalid email address.';
    tempErrors.refereeName = formData.refereeName ? '' : 'This field is required.';
    tempErrors.refereeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.refereeEmail)
      ? ''
      : 'Invalid email address.';
    tempErrors.course = formData.course ? '' : 'This field is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/refer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'An error occurred');
        }

        setSnackbar({ open: true, message: 'Referral submitted successfully!', severity: 'success' });
        handleClose();
      } catch (error) {
        console.error('Error:', error);
        setSnackbar({ open: true, message: error.message, severity: 'error' });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              name="referrerName"
              label="Your Name"
              value={formData.referrerName}
              onChange={handleChange}
              error={!!errors.referrerName}
              helperText={errors.referrerName}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              name="referrerEmail"
              label="Your Email"
              type="email"
              value={formData.referrerEmail}
              onChange={handleChange}
              error={!!errors.referrerEmail}
              helperText={errors.referrerEmail}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              name="refereeName"
              label="Friend's Name"
              value={formData.refereeName}
              onChange={handleChange}
              error={!!errors.refereeName}
              helperText={errors.refereeName}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              name="refereeEmail"
              label="Friend's Email"
              type="email"
              value={formData.refereeEmail}
              onChange={handleChange}
              error={!!errors.refereeEmail}
              helperText={errors.refereeEmail}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              name="course"
              label="Course"
              value={formData.course}
              onChange={handleChange}
              error={!!errors.course}
              helperText={errors.course}
              required
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Submit Referral'}
            </Button>
          </form>
        </Box>
      </Modal>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ReferralModal;
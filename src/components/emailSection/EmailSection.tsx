import React, { useState } from 'react';

import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';

import { sendOrderEmails } from '@hooks/useSendOrderEmails';

import type { IContent } from '@/content/content.types';

export const EmailSection = ({ emailSection }: { emailSection: IContent['emailSection'] }) => {
  const {
    title,
    description,
    emailPlaceholder,
    emailHelperText,
    submitButton,
    quantityPlaceholder,
  } = emailSection;

  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const orderId = await sendOrderEmails(email, quantity);
      setSnackbarMessage(
        `Dziękujemy za zamówienie! Twój nr zamówienia: ${orderId}. Wysłaliśmy potwierdzenie na podany adres e-mail.`
      );
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Coś poszło nie tak przy wysyłce maili:', error);
      setSnackbarMessage('Wystąpił błąd podczas wysyłki. Spróbuj ponownie.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
      setEmail('');
      setQuantity(1);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        textAlign: 'center',
        margin: '0 auto',
        borderRadius: 1,
      }}
    >
      <Typography variant='h5' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body1'>{description}</Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          maxWidth: '400px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: 2,
          mt: 2,
        }}
      >
        <TextField
          label={emailPlaceholder}
          variant='outlined'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={emailHelperText}
          required
          sx={{ width: '100%' }}
        />
        <TextField
          label={quantityPlaceholder}
          variant='outlined'
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          sx={{ width: '100%' }}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ width: '100%', py: 1 }}
          disabled={loading}
        >
          {loading ? 'Wysyłanie...' : submitButton}
        </Button>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={10000} onClose={() => setSnackbarOpen(false)}>
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

import React, { useState } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';

import type { IContent } from '@/content/content.types';

export const EmailSection = ({ emailSection }: { emailSection: IContent['emailSection'] }) => {
  const { title, description, emailPlaceholder, emailHelperText, submitButton } = emailSection;
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // W przyszłości podłączysz np. emailJS
    console.log('Email submitted:', email);
    setEmail('');
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
          sx={{
            width: '100%',
          }}
        />
        <Button type='submit' variant='contained' color='primary' sx={{ width: '100%', py: 1 }}>
          {submitButton}
        </Button>
      </Box>
    </Box>
  );
};

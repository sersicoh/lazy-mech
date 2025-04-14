// Layout.tsx
import React from 'react';

import { Box } from '@mui/material';

import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

interface IMainLayoutProps {
  children: React.ReactNode;
  headerContent?: string;
  footerContent: string;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  headerContent,
  footerContent,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '0 auto',
      }}
    >
      {headerContent && <Header headerContent={headerContent} />}
      <Box component='main' sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer footerContent={footerContent} />
    </Box>
  );
};

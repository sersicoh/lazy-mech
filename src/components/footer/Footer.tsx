import { Box, Typography } from '@mui/material';

import type { IContent } from '@/content/content.types';

export const Footer = ({ footerContent }: { footerContent: IContent['footer'] }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 2,
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: '#fff',
      }}
    >
      <Typography variant='body2'>
        © {new Date().getFullYear()} {footerContent}
      </Typography>
    </Box>
  );
};

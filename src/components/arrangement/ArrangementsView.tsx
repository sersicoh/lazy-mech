import type { Theme } from '@mui/material';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';

import { Arrangements } from '@components/arrangement/Arrangements';

import type { IArrangements } from '@/content/content.types';

export const ArrangementsView = ({ arrangements }: { arrangements: IArrangements[] }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          p: isMobile ? 2 : 4,
          backgroundColor: (theme) => theme.palette.background.default,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant='h5'
          gutterBottom
          textAlign={'center'}
          sx={{
            fontWeight: 500,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: '#fff',
            py: 1,
            width: '100%',
            px: 2,
            borderRadius: 2,
            display: 'inline-block',
          }}
        >
          {'Nasze aranżacje'}
        </Typography>

        {arrangements && (
          <>
            {arrangements.map((arrangement, index) => (
              <div key={arrangement.id}>
                <Arrangements arrangements={arrangement} />
                {index < arrangements.length - 1 && <Divider sx={{ my: 2 }} />}
              </div>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

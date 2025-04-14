import type { Theme } from '@mui/material';
import { Box, Divider, Grid, Typography, useMediaQuery } from '@mui/material';

import type { IContent } from '@/content/content.types';

export const LazyMech = ({ lazyMech }: { lazyMech: IContent['lazyMech'] }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { title, description, imageUrl } = lazyMech;
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} alignItems='center'>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component='img'
            src={imageUrl}
            alt='lazy Mech'
            sx={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 12,
              display: 'block',
              mx: 'auto',
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          {!isMobile && (
            <Typography variant='h2' sx={{ fontWeight: 600 }} gutterBottom>
              {title}
            </Typography>
          )}
          {description.map((text, index) => (
            <div key={index}>
              <Typography variant='body1'>{text}</Typography>
              {index < description.length - 1 && <Divider sx={{ my: 2 }} />}
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

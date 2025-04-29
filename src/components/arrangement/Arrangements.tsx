import type { Theme } from '@mui/material';
import { Button, Grid, Link, Typography, useMediaQuery } from '@mui/material';

import { BasicImage } from '@components/basicImage/BasicImage';

import type { IArrangements } from '@/content/content.types';

export const Arrangements = ({ arrangements }: { arrangements: IArrangements }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  return (
    <Grid container spacing={2} alignItems='center'>
      <Typography
        variant='body1'
        textAlign={'center'}
        sx={{
          mb: 1,
          borderRadius: 2,
        }}
      >
        {arrangements.description}
      </Typography>
      <Button
        variant='contained'
        color='secondary'
        fullWidth={true}
        sx={{ textTransform: 'inherit' }}
      >
        <Link href={arrangements.location?.link} color='inherit'>
          {arrangements.location?.title}
        </Link>
      </Button>

      {arrangements.imageUrls.map((imageUrl, index) => (
        <Grid key={index} size={{ md: 6, xs: 6 }} sx={{ p: isMobile ? 0 : 2 }}>
          <BasicImage imageUrl={imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

import { Button, Grid, Link, Typography } from '@mui/material';

import { BasicImage } from '@components/basicImage/BasicImage';

import type { IArrangements } from '@/content/content.types';

export const Arrangements = ({ arrangements }: { arrangements: IArrangements }) => {
  return (
    <Grid container spacing={2} alignItems='center' pt={1}>
      <Grid size={{ md: 9, xs: 12 }}>
        <Typography
          variant='body1'
          textAlign={'center'}
          sx={{
            mb: 1,
            py: 1,
            px: 2,
            borderRadius: 2,
          }}
        >
          {arrangements.description}
        </Typography>
      </Grid>
      <Grid size={{ md: 3, xs: 12 }}>
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
      </Grid>

      {arrangements.imageUrls.map((imageUrl, index) => (
        <Grid key={index} size={{ md: 6, xs: 12 }}>
          <BasicImage imageUrl={imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

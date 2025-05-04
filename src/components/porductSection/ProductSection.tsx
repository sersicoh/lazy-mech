import type { Theme } from '@mui/material';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

import PictureCarousel from '@components/pictureCarousel/PictureCarousel';

import type { IContent } from '@/content/content.types';

type Product = IContent['productSection']['product'][number];

export const ProductSection = ({ id, name, description, imageUrl }: Product) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const images = imageUrl.map((url) => new URL(`/src/assets/${id}/${url}`, import.meta.url).href);
  return (
    <Box sx={{ p: 2 }}>
      {isMobile ? (
        <Grid
          container
          spacing={2}
          alignItems='flex-start'
          sx={{
            p: 2,
            backgroundColor: (theme) => theme.palette.background.default,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant='h5'
              gutterBottom
              textAlign={'center'}
              sx={{
                fontWeight: 500,
                fontSize: '2rem',
                backgroundColor: (theme) => theme.palette.primary.main,
                color: '#fff',
                py: 1,
                width: '100%',
                px: 2,
                borderRadius: 2,
                display: 'inline-block',
              }}
            >
              {name}
            </Typography>
            <Typography variant='body1' sx={{ mb: 2, textAlign: 'center', fontSize: '1.2rem' }}>
              {description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PictureCarousel images={images} name={name} />
          </Grid>
        </Grid>
      ) : (
        <Box
          sx={{
            p: 4,
            backgroundColor: (theme) => theme.palette.background.default,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Grid container spacing={4} alignItems='flex-start'>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant='h5'
                gutterBottom
                textAlign={'center'}
                sx={{
                  fontWeight: 500,
                  fontSize: '3rem',
                  width: '100%',
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: '#fff',
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  display: 'inline-block',
                }}
              >
                {name}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  marginBottom: isMobile ? '0' : '24px',
                  fontSize: '1.6rem',
                  margin: '0 auto',
                  px: 2,
                }}
              >
                {description}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <PictureCarousel images={images} name={name} />
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

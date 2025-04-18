import type { Theme } from '@mui/material';
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { Arrangements } from '@components/arrangement/Arrangements';
import { CustomAccordion } from '@components/customAccordion/CustomAccordion';

import type { IContent } from '@/content/content.types';

type Product = IContent['productSection']['product'][number];

export const ProductSection = ({
  name,
  description,
  advantages,
  imageUrl,
  overlayImageUrl,
  arrangements,
}: Product) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const image = new URL(`/src/assets/${imageUrl}`, import.meta.url).href;
  const overlayImage = overlayImageUrl
    ? new URL(`/src/assets/${overlayImageUrl}`, import.meta.url).href
    : undefined;

  const Picture = () => (
    <Box sx={{ position: 'relative', width: '100%', borderRadius: 2, boxShadow: 3 }}>
      <Box
        component='img'
        src={image}
        alt={name}
        sx={{ width: '100%', height: 'auto', borderRadius: 2, display: 'block', mb: 2 }}
      />

      {overlayImage && (
        <Box
          component='img'
          src={overlayImage}
          alt={`${name} - dodatkowy`}
          sx={{
            position: 'absolute',
            top: '3%',
            right: '3%',
            width: '25%',
            height: 'auto',
            borderRadius: 2,
            boxShadow: `2px 2px 12px 0px rgba(255, 255, 255, 0.75)`,
          }}
        />
      )}
    </Box>
  );
  return (
    <Box sx={{ p: 2 }}>
      {isMobile ? (
        <Box
          sx={{
            p: 2,
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
              px: 2,
              borderRadius: 2,
              mb: 2,
            }}
          >
            {name}
          </Typography>
          <Typography variant='body1' sx={{ mb: 2, textAlign: 'center' }}>
            {description}
          </Typography>
          <Picture />
          <Typography
            variant='h6'
            textAlign={'center'}
            sx={{
              mb: 1,
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: '#fff',
              py: 1,
              px: 2,
              borderRadius: 2,
            }}
          >
            Cechy
          </Typography>
          <List>
            ro
            {advantages.map((advantage, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText primary={advantage} />
              </ListItem>
            ))}
          </List>
          <CustomAccordion label='Nasze aranżacje'>
            {arrangements.map((arrangement, index) => (
              <>
                <Arrangements key={index} arrangements={arrangement} />
                {index < arrangements.length - 1 && <Divider sx={{ my: 2 }} />}
              </>
            ))}
          </CustomAccordion>
        </Box>
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
            <Typography
              variant='h5'
              gutterBottom
              textAlign={'center'}
              sx={{
                fontWeight: 500,
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
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant='body1'>{description}</Typography>
              <Typography
                variant='h6'
                sx={{
                  mt: 2,
                  mb: 1,
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  color: '#fff',
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                }}
              >
                Cechy
              </Typography>
              <List>
                {advantages.map((advantage, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText primary={advantage} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Picture />
            </Grid>
            <CustomAccordion label='Nasze aranżacje'>
              {arrangements.map((arrangement, index) => (
                <>
                  <Arrangements key={index} arrangements={arrangement} />
                  {index < arrangements.length - 1 && <Divider sx={{ my: 4 }} />}
                </>
              ))}
            </CustomAccordion>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

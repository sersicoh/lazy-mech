import { useState } from 'react';

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

interface PictureCarouselProps {
  images: string[];
  overlayImage?: string;
  name: string;
}

const PictureCarousel = ({ images, overlayImage, name }: PictureCarouselProps) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goTo = (i: number) => setIndex((i + total) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
      }}
    >
      {images.map((src, i) => (
        <Box
          key={src}
          component='img'
          src={src}
          alt={`${name} – ${i + 1}/${total}`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 2,
            transition: 'opacity .3s ease-in-out',
            opacity: i === index ? 1 : 0,
            pointerEvents: 'none',
          }}
        />
      ))}

      {overlayImage && (
        <Box
          component='img'
          src={overlayImage}
          alt={`${name} – dodatkowy`}
          sx={{
            position: 'absolute',
            top: '3%',
            right: '3%',
            width: '25%',
            height: 'auto',
            borderRadius: 2,
            boxShadow: '2px 2px 12px rgba(255,255,255,.75)',
          }}
        />
      )}

      {total > 1 && (
        <>
          <IconButton
            onClick={prev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '3%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,.4)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,.6)' },
            }}
          >
            <ArrowBackIosNew fontSize='medium' />
          </IconButton>

          <IconButton
            onClick={next}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '3%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,.4)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,.6)' },
            }}
          >
            <ArrowForwardIos fontSize='medium' />
          </IconButton>
        </>
      )}
      {total > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                backgroundColor: i === index ? 'white' : 'rgba(255,255,255,.5)',
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PictureCarousel;

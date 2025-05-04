import { useState } from 'react';

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

interface PictureCarouselProps {
  images: string[];
  name: string;
}

const PictureCarousel = ({ images, name }: PictureCarouselProps) => {
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: `#ffffff`,
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
            width: '100%',
            objectFit: 'cover',
            transition: 'opacity .3s ease-in-out',
            opacity: i === index ? 1 : 0,
            pointerEvents: 'none',
          }}
        />
      ))}
      {total > 1 && (
        <>
          <IconButton
            onClick={prev}
            sx={{
              position: 'absolute',
              bottom: '3%',
              left: '3%',
              color: 'white',
              backgroundColor: 'rgba(114, 140, 105, .7)',
              '&:hover': { backgroundColor: 'rgba(114, 140, 105, .9)' },
            }}
          >
            <ArrowBackIosNew fontSize='large' />
          </IconButton>

          <IconButton
            onClick={next}
            sx={{
              position: 'absolute',
              bottom: '3%',
              right: '3%',
              color: 'white',
              backgroundColor: 'rgba(114, 140, 105, .7)',
              '&:hover': { backgroundColor: 'rgba(114, 140, 105, .9)' },
            }}
          >
            <ArrowForwardIos fontSize='large' />
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
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: i === index ? 'rgba(114, 140, 105)' : 'rgba(114, 140, 105, .5)',
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

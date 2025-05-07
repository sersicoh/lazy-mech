import { useRef, useState } from 'react';

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import type { Theme } from '@mui/material';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

interface PictureCarouselProps {
  images: string[];
  name: string;
}
const SWIPE_THRESHOLD = 40;

const PictureCarousel = ({ images, name }: PictureCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = images.length;
  const touchStartX = useRef<number | null>(null);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  };

  const prev = () => paginate(-1);
  const next = () => paginate(1);

  // obsługa gestu swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence custom={direction} initial={false} mode='wait'>
        <Box
          key={images[index]}
          component={motion.img}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ type: 'tween', duration: 0.15 }}
          src={images[index]}
          alt={`${name} – ${index + 1}/${total}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </AnimatePresence>

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
            <ArrowBackIosNew fontSize={isMobile ? 'medium' : 'large'} />
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
            <ArrowForwardIos fontSize={isMobile ? 'medium' : 'large'} />
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
              onClick={() => paginate(i - index)}
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

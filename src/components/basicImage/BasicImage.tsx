import { Box } from '@mui/material';

export const BasicImage = ({ imageUrl, alt }: { imageUrl: string; alt?: string }) => {
  const image = new URL(`/src/assets/${imageUrl}`, import.meta.url).href;
  return (
    <Box
      component='img'
      src={image}
      alt={alt ?? 'image'}
      sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }}
    />
  );
};

import { AppBar, Toolbar, Typography } from '@mui/material';

import type { IContent } from '@/content/content.types';

export const Header = ({ headerContent }: { headerContent: IContent['header'] }) => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography variant='h4' sx={{ textAlign: 'center', flexGrow: 1 }}>
          {headerContent}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

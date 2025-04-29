import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#728C69', // zielonkawy odcień nawiązujący do mchu
    },
    secondary: {
      main: '#8C7B6B', // brązowawy odcień np. doniczki
    },
    text: {
      primary: grey[800],
    },
    background: {
      default: '#FAF8F3', // jasne, "kremowe" tło
    },
  },
  typography: {
    fontFamily: '"National Park", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: 'body2',
        },
      },
    },
  },
});

export default theme;

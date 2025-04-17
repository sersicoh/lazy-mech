import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { EmailSection } from '@components/emailSection/EmailSection';
import { LazyMech } from '@components/lazyMech/LazyMech';
import { ProductSection } from '@components/porductSection/ProductSection';
import { MainLayout } from '@views/mainLayout/MainLayout';

import theme from '@theme/theme';

import { content } from '@/content/content';
import type { IContent } from '@/content/content.types';

export const App = () => {
  const { header, footer, productSection, emailSection, lazyMech }: IContent = content;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout headerContent={header} footerContent={footer}>
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <LazyMech lazyMech={lazyMech} />
          {productSection.product.map((productItem) => (
            <ProductSection key={productItem.name} {...productItem} />
          ))}
          <EmailSection emailSection={emailSection} />
        </Box>
      </MainLayout>
    </ThemeProvider>
  );
};

//test commit with secrets

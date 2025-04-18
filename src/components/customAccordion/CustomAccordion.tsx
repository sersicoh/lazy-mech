import type { ReactNode } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export interface IAccordionProps {
  label: string;
  children: ReactNode;
}
export const CustomAccordion = ({ label, children }: IAccordionProps) => (
  <Accordion
    sx={{
      mt: 2,
      borderRadius: 1,
      boxShadow: 3,
      backgroundColor: (theme) => theme.palette.background.default,
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: (theme) => theme.palette.background.default }} />}
      aria-controls='panel-content'
      id='panel-header'
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: '#fff',
        borderRadius: 2,
        '& .MuiAccordionSummary-content': { my: 0.5 },
      }}
    >
      <Typography
        variant='button'
        sx={{ fontWeight: 500, fontSize: '1.2rem', textTransform: 'inherit' }}
      >
        {label}
      </Typography>
    </AccordionSummary>

    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

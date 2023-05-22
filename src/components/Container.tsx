import { Box } from '@mui/material';

export default function Container({ children }) {
  return (
    <>
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          gap: '10px',
          width: '100vw',
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.10), rgba(211, 37, 37, 0.80)), url(/bg.webp)',
        }}
      >
        {children}
      </Box>
    </>
  );
}

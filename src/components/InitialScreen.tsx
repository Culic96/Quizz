import { Box, Button, Link, Typography } from '@mui/material';

export default function InitialScreen() {
  return (
    <>
      <Box
        sx={{
          height: '90vh',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        <Typography variant="h4" component="h3" color={'white'}>
          Hello there, would you like to take a quick quizz and check your
          knowledge?
        </Typography>
        <Link href="/secondScreen">
          <Button variant="contained">Start Quizz</Button>
        </Link>
      </Box>
    </>
  );
}

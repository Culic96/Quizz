import { Box, Typography } from '@mui/material';

export default function GameFinished({ username, points }) {
  const user = username;
  const score = points;
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.60)),url(/success.png)',
          height: '400px',
          width: '400px',
          display: 'flex',
          backgroundSize: 'cover',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Typography variant="h5" component="h5" color={'#fff'}>
          Congratulations, you finished finished the game {user}!
        </Typography>
        <Typography variant="h5" component="h5" color={'#fff'}>
          You magage to score {score} from total of 50 points.
        </Typography>
      </Box>
    </>
  );
}

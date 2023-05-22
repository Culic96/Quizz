import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const LeaderboardWrapper = styled(Box)({
  color: '#fff',
  width: '40vw',
  height: '70vh',
  overflow: 'hidden',
  boxShadow:
    '0px 12px 4px -12px rgb(0 0 0 / 20%), 0px 5px 9px 0px rgb(0 0 0 / 14%), 0px 12px 10px 12px rgb(0 0 0 / 12%)',
});

export const LeaderboardHeadingWrapper = styled(Box)({
  height: '60px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderBottom: '2px solid white',
});

export const LeaderboardHeading = styled(Typography)({
  fontFamily: 'Nunito',
  fontWeight: '500',
  textTransform: 'uppercase',
  fontSize: '24px',
  transition: 'all 0.3s ease',
  textDecoration: 'underline 2px solid #fff',

  '&:hover': {
    cursor: 'pointer',
    color: '#1976d2',
    transition: 'all 0.3s ease',
    textDecoration: 'underline 2px solid #1976d2',
  },
});

export const LeaderboardBodyWrapper = styled(Box)({
  textAlign: 'center',
  overflowY: 'scroll',
  boxSizing: 'content-box',
  width: '100%',
  height: '100%',
  paddingRight: '17px',
});

export const LeaderboardBodyHolder = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const LeaderboardDivider = styled(Box)({
  width: '50%',
});

export const LeaderboardText = styled(Typography)({
  fontFamily: 'Nunito',
  fontWeight: '300',
  fontSize: '20px',
});

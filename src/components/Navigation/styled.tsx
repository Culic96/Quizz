import styled from '@emotion/styled';
import { AppBar, Box, Typography } from '@mui/material';

export const NavbarContainer = styled(Box)({
  height: '10vh',
  width: '100vw',
});

export const Navbar = styled(AppBar)({
  position: 'static',
});

export const NavTitle = styled(Typography)({
  fontSize: '40px',
  flexGrow: 1,
  fontFamily: 'Nunito',
  fontWeight: '500',
});

export const NavLinksHolder = styled('div')({
  backgroundColor: '#1976d2',
  padding: '1rem',
  display: 'inline-block',
  position: 'absolute',
  top: '10vh',
  left: 0,
});

export const NavLink = styled(Typography)({
  fontSize: '24px',
  color: '#fff',
  fontFamily: 'Nunito',
  fontWeight: '300',
});

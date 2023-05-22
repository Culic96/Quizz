import { IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {
  Navbar,
  NavbarContainer,
  NavLink,
  NavLinksHolder,
  NavTitle,
} from './styled';
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavbarContainer>
        <Navbar>
          <Toolbar>
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {!isOpen && <MenuIcon sx={{ fontSize: 40 }} />}
              {isOpen && <CloseIcon sx={{ fontSize: 40 }} />}
            </IconButton>
            <NavTitle>Trivia Quizz</NavTitle>
          </Toolbar>
        </Navbar>
        {isOpen && (
          <NavLinksHolder>
            <Link onClick={() => setIsOpen(false)} href="/">
              <NavLink>Home</NavLink>
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/leaderboards">
              <NavLink>Leaderboards</NavLink>
            </Link>
          </NavLinksHolder>
        )}
      </NavbarContainer>
    </>
  );
}

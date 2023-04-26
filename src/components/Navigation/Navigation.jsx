import { Nav, Link } from './Navigation.styled';
import { Button, IconButton } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const colorIconHome = location.pathname === '/' ? '#e84a5f' : '#d2c8e7';
  return (
    <Nav>
      <Link to="/">
        <IconButton size="large">
          <Home fontSize="inherit" sx={{ color: `${colorIconHome}` }} />
        </IconButton>
      </Link>
      <Button sx={{ fontSize: '1rem', color: '#d2c8e7' }}>
        <Link to="/tweets">Tweets</Link>
      </Button>
    </Nav>
  );
};

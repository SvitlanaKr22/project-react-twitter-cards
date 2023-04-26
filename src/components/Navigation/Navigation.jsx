import { Nav, Link } from './Navigation.styled';
import { Button, IconButton } from '@mui/material';
import { Home } from '@mui/icons-material';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">
        <IconButton size="large">
          <Home fontSize="inherit" sx={{ color: '#d2c8e7' }} />
        </IconButton>
      </Link>
      <Button sx={{ fontSize: '1rem', color: '#d2c8e7' }}>
        <Link to="/tweets">Tweets</Link>
      </Button>
    </Nav>
  );
};

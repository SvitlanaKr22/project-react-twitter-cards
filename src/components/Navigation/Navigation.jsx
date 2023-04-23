import { Nav, Link } from './Navigation.styled';
import { Button, IconButton } from '@mui/material';
import { Home } from '@mui/icons-material';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">
        <IconButton size="large">
          <Home fontSize="inherit" />
        </IconButton>
      </Link>
      {/* <Button sx={{ fontSize: '1rem' }}>
        <Link to="/tweets">Tweets</Link>
      </Button> */}
      <Button sx={{ fontSize: '1rem' }}>
        <Link to="/tweets">Tweets</Link>
      </Button>
    </Nav>
  );
};

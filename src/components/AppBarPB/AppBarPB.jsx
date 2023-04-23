import { AppBar, Toolbar } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBarPB = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

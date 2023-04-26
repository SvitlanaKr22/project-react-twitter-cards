import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';
import { AppBarPB } from './AppBarPB/AppBarPB';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBarPB />
      <Suspense
        fallback={
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

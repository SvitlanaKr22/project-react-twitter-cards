import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';
import { AppBarPB } from './AppBarPB/AppBarPB';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBarPB />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

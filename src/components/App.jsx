import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { NotFound } from '../pages/NotFound';

const HomePage = lazy(() => import('../pages/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <CssVarsProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CssVarsProvider>
  );
};

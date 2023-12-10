import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import Navbar from '../layouts/navbar/Navbar';

import { mainRoutes } from './utils/mainRoutes';

const Pages = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Navbar />
      <Routes>
        {mainRoutes.map((route) => {
          return (
            <Route
              key={route?.id}
              path={route?.path}
              element={route?.element}
            />
          );
        })}
        <Route path='/' element={<Navigate to='/episode/1' />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;

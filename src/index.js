import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/contact',
    element: <div>Contact </div>,
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

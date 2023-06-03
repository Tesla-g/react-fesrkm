import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Error from './Error';
import { App } from './App';
import { AppLayout } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restramenu from './Restramenu';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: '/Home',
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: '/Contact',
        element: <div>Contact </div>,
        errorElement: <Error />,
      },
      {
        path: '/About',
        element: <div>About </div>,
        errorElement: <Error />,
      },
      {
        path: '/Cart',
        element: <div>Cart </div>,
        errorElement: <Error />,
      },
      {
        path: '/restra/:id',
        element: <Restramenu />,
        errorElement: <Error />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../../pages/MainLayout';
import Home from '../../../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts', element: <></> },
      { path: 'posts/:id', element: <></> },
      { path: 'users/:id/albums', element: <></> },
      { path: 'albums/:id/photos', element: <></> },
      { path: 'users/:id/todos', element: <></> },
      { path: 'users/:id/posts', element: <></> },
    ],
  },
]);

export default router;

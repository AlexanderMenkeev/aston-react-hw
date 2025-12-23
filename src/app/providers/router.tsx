import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../pages/MainLayout/MainLayout';
import Posts from '../../pages/Posts';
import Post from '../../pages/Post';
import User from '../../pages/User';
import UserAlbums from '../../pages/UserAlbums/UserAlbums';
import UserPosts from '../../pages/UsersPosts/UserPosts';
import UserTodos from '../../pages/UserTodos/UserTodos';
import UserLayout from '../../pages/UserLayout/UserLayout';
import AlbumPhotos from '../../pages/AlbumPhotos/AlbumPhotos';
import Users from '../../pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Posts /> },
      { path: 'users', element: <Users /> },
      { path: 'posts/:id', element: <Post /> },

      {
        path: 'users/:id',
        element: <UserLayout />,
        children: [
          { index: true, element: <User /> },
          { path: 'posts', element: <UserPosts /> },
          { path: 'albums', element: <UserAlbums /> },
          { path: 'todos', element: <UserTodos /> },
        ],
      },

      { path: 'albums/:id/photos', element: <AlbumPhotos /> },
    ],
  },
]);

export default router;

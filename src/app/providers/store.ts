import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../entities/post/api/postsApi';
import { commentsApi } from '../../entities/comment/api/commentsApi';
import { albumsApi } from '../../entities/album/api/albumsApi';
import { photosApi } from '../../entities/photo/api/photosApi';
import { usersApi } from '../../entities/user/api/usersApi';
import { todosApi } from '../../entities/todo/api/todosApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
      .concat(usersApi.middleware)
      .concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../entities/post/api/postsApi';
import { commentsApi } from '../../entities/comment/api/commentsApi';
import { albumsApi } from '../../entities/album/api/albumsApi';
import { photosApi } from '../../entities/photo/api/photosApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware),
});

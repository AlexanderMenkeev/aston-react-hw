import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../shared/config';
import type IAlbum from '../model/IAlbum';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAlbum: builder.query<IAlbum, number>({
      query: (id) => `/albums/${id}`,
    }),
    getAlbums: builder.query<IAlbum[], number>({
      query: (userId) => `/users/${userId}/albums`,
    }),
  }),
});

export const { useGetAlbumQuery, useGetAlbumsQuery } = albumsApi;

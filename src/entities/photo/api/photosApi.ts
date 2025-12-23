import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../shared/config';
import type IPhoto from '../model/IPhoto';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPhotos: builder.query<IPhoto[], number>({
      query: (albumId) => `/albums/${albumId}/photos`,
    }),
  }),
});

export const { useGetPhotosQuery } = photosApi;

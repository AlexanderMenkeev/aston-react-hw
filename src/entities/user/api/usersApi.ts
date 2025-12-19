import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../shared/config';
import type IUser from '../model/IUser';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserQuery } = usersApi;

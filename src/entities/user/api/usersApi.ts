import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../shared/config';
import type IUser from '../model/IUser';
import { createEntityAdapter } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter<IUser>();
type UsersState = ReturnType<typeof usersAdapter.getInitialState>;

const initialState = usersAdapter.getInitialState();

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersState, void>({
      query: () => '/users',
      transformResponse: (response: IUser[]) => {
        return usersAdapter.setAll(initialState, response);
      },
    }),
    getUser: builder.query<IUser, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserQuery, useGetUsersQuery } = usersApi;

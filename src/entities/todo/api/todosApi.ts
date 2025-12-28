import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../shared/config';
import type ITodo from '../model/ITodo';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], number>({
      query: (userId) => `/users/${userId}/todos`,
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;

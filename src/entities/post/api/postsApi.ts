import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type IPost from '../model/IPost';
import { API_URL } from '../../../shared/config';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], { userId?: string } | void>({
      query: (params) => ({
        url: '/posts',
        params: params || {},
      }),
    }),
    getPost: builder.query<IPost, string | undefined>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;

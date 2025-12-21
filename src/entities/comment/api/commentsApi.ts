import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../shared/config';
import type IComment from '../model/IComment';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getComments: builder.query<IComment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;

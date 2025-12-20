import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type IPost from '../model/IPost';
import { API_URL } from '../../../shared/config';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/providers/store';

const postsAdapter = createEntityAdapter<IPost>();
type PostsState = ReturnType<typeof postsAdapter.getInitialState>;

const initialState = postsAdapter.getInitialState();

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsState, { userId?: string } | void>({
      query: (params) => ({
        url: '/posts',
        params: params || {},
      }),
      transformResponse: (response: IPost[]) => {
        return postsAdapter.setAll(initialState, response);
      },
    }),
    getPost: builder.query<IPost, string | undefined>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;

const selectPostsResult = postsApi.endpoints.getPosts.select();
const selectPostsData = createSelector(selectPostsResult, (result) => result.data);

export const postsSelectors = postsAdapter.getSelectors((state: RootState) => selectPostsData(state) ?? initialState);

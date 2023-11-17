// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
import { type Movie, type QueryResult } from "../types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://itunes.apple.com/search",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    // when persisting the root reducer
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }

    // when persisting the api reducer
    if (
      action.type === REHYDRATE &&
      action.key === "key used with redux-persist"
    ) {
      return action.payload;
    }
  },
  endpoints: (builder) => ({
    getStarMovies: builder.query<QueryResult, string>({
      query: (term) => `?term=${term}&country=au&media=movie&all`,
    }),
    getMovieDetail: builder.query<QueryResult, string>({
      query: (id) => `https://itunes.apple.com/lookup?id=${id}&country=au`,
    }),
  }),
});

export const useGetStarMoviesQueryState =
  moviesApi.endpoints.getStarMovies.useQueryState;

export const { useGetStarMoviesQuery, useGetMovieDetailQuery } = moviesApi;

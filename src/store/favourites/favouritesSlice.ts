import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { type Movie } from "../types";

const initialState: Movie[] = [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Movie>) => {
      state.push(action.payload);
    },
    removeFavourite: (state, action: PayloadAction<Movie>) => {
      const idx = state.findIndex((movie) => {
        if (action.payload.trackId) {
          return movie.trackId === action.payload.trackId;
        }
        return movie.collectionId === action.payload.collectionId;
      });

      state.splice(idx, 1);
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export const selectFavouritesSlice = (state: RootState) => state.favourites;

export default favouritesSlice.reducer;

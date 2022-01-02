import { createSlice } from "@reduxjs/toolkit";
import { IFavoriteState } from "./types";

const initialState: IFavoriteState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addNewFavoriteCharacter(state, { payload }) {
      state.favorite = [...state.favorite, payload];
    },
    removeFavoriteCharacter(state, { payload }) {
      state.favorite = state.favorite.filter((id) => id !== payload);
    },
  },
});

export const { addNewFavoriteCharacter, removeFavoriteCharacter } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

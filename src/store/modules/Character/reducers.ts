import { createSlice } from "@reduxjs/toolkit";
import { ICharacterState } from "./types";

const initialState: ICharacterState = {
  character: [],
  search: "",
  currentPage: 1,
  fullPage: 0,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    getAllCharacter() {},
    addCharacter(state, { payload }) {
      state.character =
        state.currentPage === 1
          ? payload.character
          : [...state.character, ...payload.character];
      state.fullPage = payload.fullPage;
      state.currentPage = state.currentPage + 1;
    },
    searchCharacter(state, { payload }) {
      state.search = payload.search;
      state.currentPage = 1;
    },
  },
});

export const { getAllCharacter, addCharacter, searchCharacter } =
  characterSlice.actions;

export default characterSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import character from "./Character/reducers";
import favorite from "./Favorite/reducers";

export default combineReducers({
  character,
  favorite,
});

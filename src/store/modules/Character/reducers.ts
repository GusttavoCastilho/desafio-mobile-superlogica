import { Reducer } from "redux";
import { ICharacterState, CharacterTypes } from "./types";

const INITIAL_STATE: ICharacterState = {
  character: [],
  pending: false,
  error: "",
};

const character: Reducer<ICharacterState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterTypes.fetchCharacterRequest:
      return { ...state, pending: true };
    case CharacterTypes.fetchCharacterSuccess:
      return { ...state, character: action.payload.character, error: "" };
    case CharacterTypes.fetchCharacterFailure:
      return { ...state, character: [], error: action.payload.error };
    default:
      return { ...state };
  }
};

export default character;

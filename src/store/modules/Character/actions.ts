import { ICharacter, CharacterTypes } from "./types";

export const fetchCharacterRequest = () => {
  return { type: CharacterTypes.fetchCharacterRequest };
};

export const fetchCharacterSuccess = (character: ICharacter) => {
  return { type: CharacterTypes.fetchCharacterSuccess, payload: { character } };
};

export const fetchCharacterFailure = (character: ICharacter) => {
  return { type: CharacterTypes.fetchCharacterFailure, payload: { character } };
};

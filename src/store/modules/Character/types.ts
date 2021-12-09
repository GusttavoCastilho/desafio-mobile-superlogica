export enum CharacterTypes {
  fetchCharacterRequest = "FETCH_CHARACTER_REQUEST",
  fetchCharacterSuccess = "FETCH_CHARACTER_SUCCESS",
  fetchCharacterFailure = "FETCH_CHARACTER_FAILURE",
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  location: Location;
  episode: string[];
}

export interface ICharacterState {
  character: ICharacter[];
  pending: boolean;
  error: string;
}

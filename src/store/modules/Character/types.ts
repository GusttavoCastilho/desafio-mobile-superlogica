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
  search: string;
  fullPage: number;
  currentPage: number;
}

export interface Actress {
  id: number;
  image: string;
  name: string;
  birth_year: number;
  nationality: string;
  most_famous_movies: string[];
  awards: string;
  biography: string;
}

export interface SelectedItemsState {
  items: Actress[];
}

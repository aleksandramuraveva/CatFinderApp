export interface Actress {
  id: number;
  image_link: string;
  name: string;
  origin: string;
  length: string;
  min_weight: number;
  max_weight: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  family_friendly: number;
  shedding: number;
  general_health: number;
  playfulness: number;
  meowing: number;
  children_friendly: number;
  stranger_friendly: number;
  grooming: number;
  intelligence: number;
  other_pets_friendly: number;
}

export interface SelectedItemsState {
  items: Actress[];
}


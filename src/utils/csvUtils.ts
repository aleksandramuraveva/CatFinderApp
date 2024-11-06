import { Actress } from '../types';

export const headers = [
     { label: 'Name', key: 'name' },
  { label: 'Origin', key: 'origin' },
  { label: 'Length', key: 'length' },
  { label: 'Weight', key: 'weight' },
  { label: 'Life Expectancy', key: 'life_expectancy' },
  { label: 'Family Friendly', key: 'family_friendly' },
  { label: 'Shedding', key: 'shedding' },
  { label: 'General Health', key: 'general_health' },
  { label: 'Playfulness', key: 'playfulness' },
  { label: 'Meowing', key: 'meowing' },
  { label: 'Children Friendly', key: 'children_friendly' },
  { label: 'Stranger Friendly', key: 'stranger_friendly' },
  { label: 'Grooming', key: 'grooming' },
  { label: 'Intelligence', key: 'intelligence' },
  { label: 'Other Pets Friendly', key: 'other_pets_friendly' },
];

export const generateCsvData = (selectedItems: Actress[]) => {
  return selectedItems.map((item) => ({
    name: item.name,
    origin: item.origin,
    length: item.length,
    weight: `${item.min_weight} - ${item.max_weight} lbs`,
    life_expectancy: `${item.min_life_expectancy} - ${item.max_life_expectancy} years`,
    family_friendly: item.family_friendly,
    shedding: item.shedding,
    general_health: item.general_health,
    playfulness: item.playfulness,
    meowing: item.meowing,
    children_friendly: item.children_friendly,
    stranger_friendly: item.stranger_friendly,
    grooming: item.grooming,
    intelligence: item.intelligence,
    other_pets_friendly: item.other_pets_friendly,
  }));
};

import { Actress } from '../types';

export const headers = [
  { label: 'Name', key: 'name' },
  { label: 'Birth Year', key: 'birth_year' },
  { label: 'Nationality', key: 'nationality' },
  { label: 'Most Famous Movies', key: 'most_famous_movies' },
  { label: 'Awards', key: 'awards' },
  { label: 'Biography', key: 'biography' },
  { label: 'Image URL', key: 'image' },
];

export const generateCsvData = (selectedItems: Actress[]) => {
  return selectedItems.map((item) => ({
    name: item.name,
    birth_year: item.birth_year,
    nationality: item.nationality,
    most_famous_movies: item.most_famous_movies.join(', '),
    awards: item.awards,
    biography: item.biography,
    image: item.image,
  }));
};

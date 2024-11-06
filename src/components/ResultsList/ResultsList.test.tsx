import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultsList from '.';
import { Actress } from '../../types';

const mockActresses: Actress[] = [
  {
    id: 1,
    name: 'Actress 1',
    image_link: 'image1.jpg',
    origin: 'American',
    length: 'Medium',
    min_weight: 8,
    max_weight: 15,
    min_life_expectancy: 12,
    max_life_expectancy: 15,
    family_friendly: 5,
    shedding: 3,
    general_health: 4,
    playfulness: 5,
    meowing: 2,
    children_friendly: 4,
    stranger_friendly: 3,
    grooming: 2,
    intelligence: 4,
    other_pets_friendly: 4,
  },
  {
    id: 2,
    name: 'Actress 2',
    image_link: 'image2.jpg',
    origin: 'British',
    length: 'Short',
    min_weight: 7,
    max_weight: 14,
    min_life_expectancy: 10,
    max_life_expectancy: 13,
    family_friendly: 4,
    shedding: 2,
    general_health: 5,
    playfulness: 4,
    meowing: 3,
    children_friendly: 5,
    stranger_friendly: 4,
    grooming: 3,
    intelligence: 5,
    other_pets_friendly: 5,
  },
];


test('renders the specified number of cards', async () => {
  render(
    <BrowserRouter>
      <ResultsList actresses={mockActresses} />
    </BrowserRouter>,
  );

  const resultItems = await screen.findAllByRole('listitem');
  expect(resultItems).toHaveLength(mockActresses.length);
});

test('displays a message if no cards are present', async () => {
  render(
    <BrowserRouter>
      <ResultsList actresses={[]} />
    </BrowserRouter>,
  );

  const noResultsMessage = screen.getByText(/No actresses found/i);
  expect(noResultsMessage).to.exist;
});

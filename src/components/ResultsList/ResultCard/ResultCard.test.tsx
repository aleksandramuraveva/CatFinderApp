import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultCard from '.';
import { Actress } from '../../../types';

const mockActress: Actress = {
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
};


test('renders the relevant card data', () => {
  render(
    <BrowserRouter>
      <ResultCard actress={mockActress} handleCardClick={() => {}} />
    </BrowserRouter>,
  );

  const nameElement = screen.getByText(mockActress.name);
  const originElement = screen.getByText(
    `Origin: ${mockActress.origin}`,
  );
  const lengthElement = screen.getByText(
    `Length: ${mockActress.length}`,
  );


  expect(nameElement).to.exist;
  expect(originElement).to.exist;
  expect(lengthElement).to.exist;
});

test('clicking on a card triggers the handleCardClick function', () => {
  const handleCardClick = () => {
    console.log('Card clicked');
  };

  render(
    <BrowserRouter>
      <ResultCard actress={mockActress} handleCardClick={handleCardClick} />
    </BrowserRouter>,
  );

  const cardElements = screen.getAllByRole('listitem');
  cardElements.forEach((cardElement: HTMLElement) => {
    fireEvent.click(cardElement);
  });
});

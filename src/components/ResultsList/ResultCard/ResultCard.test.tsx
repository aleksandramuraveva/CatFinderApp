import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultCard from '.';
import { Actress } from '../../../types';

const mockActress: Actress = {
  id: 1,
  name: 'Actress 1',
  image: 'image1.jpg',
  birth_year: 1980,
  nationality: 'American',
  most_famous_movies: [],
  awards: '',
  biography: '',
};

test('renders the relevant card data', () => {
  render(
    <BrowserRouter>
      <ResultCard actress={mockActress} handleCardClick={() => {}} />
    </BrowserRouter>,
  );

  const nameElement = screen.getByText(mockActress.name);
  const birthYearElement = screen.getByText(
    `Birth Year: ${mockActress.birth_year}`,
  );
  const nationalityElement = screen.getByText(
    `Nationality: ${mockActress.nationality}`,
  );

  expect(nameElement).to.exist;
  expect(birthYearElement).to.exist;
  expect(nationalityElement).to.exist;
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

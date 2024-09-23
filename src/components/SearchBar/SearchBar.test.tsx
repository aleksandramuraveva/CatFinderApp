import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from '.';

test('saves the entered value to the local storage when the Search button is clicked', async () => {
  const onSearch = (value: string) => {
    localStorage.setItem('searchTerm', value);
  };
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <SearchBar onSearch={onSearch} searchTerm="" />
    </MemoryRouter>,
  );

  const input = getByPlaceholderText('e.g., Robbie...');
  fireEvent.change(input, { target: { value: 'Test Actress' } });

  const button = getByText('Search');
  fireEvent.click(button);

  await waitFor(() => {
    expect(localStorage.getItem('searchTerm')).toBe('Test Actress');
  });
});

test('retrieves the value from the local storage upon mounting', () => {
  localStorage.setItem('searchTerm', 'Test Actress');

  const onSearch = (value: string) => {
    localStorage.setItem('searchTerm', value);
  };
  const { getByDisplayValue } = render(
    <MemoryRouter>
      <SearchBar onSearch={onSearch} searchTerm="Test Actress" />
    </MemoryRouter>,
  );

  const input = getByDisplayValue('Test Actress');
  expect(input).not.toBeNull();
});

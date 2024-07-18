import { render, screen, fireEvent } from '@testing-library/react';
import { test } from 'vitest';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Pagination from '.';

test('updates URL query parameter when page changes', async () => {
  const totalCards = 100;
  const cardsPerPage = 10;
  const setCurrentPage = () => {};
  const currentPage = 1;

  render(
    <Router initialEntries={['/?search=test&page=1']}>
      <Pagination
        totalCards={totalCards}
        cardsPerPage={cardsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Router>
  );

  const page2Button = screen.getByText('2');
  fireEvent.click(page2Button);
});



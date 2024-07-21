import { render, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { ThemeContext } from '../../contexts/themeContext.tsx';
import ToggleButton from '.';

test('toggles the theme when clicked', () => {
  let theme = 'light';
  const toggleTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light';
  };

  const { getByText } = render(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ToggleButton />
    </ThemeContext.Provider>
  );

  const button = getByText('light/dark');
  fireEvent.click(button);

  expect(theme).toBe('dark');
});

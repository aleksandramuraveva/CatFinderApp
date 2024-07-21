import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext, ThemeContextType } from './themeContext.tsx';

test('provides the correct initial theme value', () => {
  const TestComponent = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('ThemeContext is undefined');
    }
    const { theme }: ThemeContextType = context;
    return <div>{theme}</div>;
  };

  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  expect(screen.getByText('light')).to.exist;
});

test('toggles the theme value when toggleTheme is called', () => {
  const TestComponent = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('ThemeContext is undefined');
    }
    const { theme, toggleTheme } = context;
    React.useEffect(() => {
      toggleTheme();
    }, [toggleTheme]);

    return <div>{theme}</div>;
  };

  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  expect(screen.getByText('dark')).to.exist;
});

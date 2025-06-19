import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
  });

  it('toggles theme when clicked', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = getByRole('button');
    
    // Проверяем начальное состояние
    expect(button.querySelector('.toggle-thumb')).toHaveClass('light');
    
    // Кликаем по кнопке
    fireEvent.click(button);
    
    // Проверяем изменение состояния
    expect(button.querySelector('.toggle-thumb')).toHaveClass('dark');
  });

  it('has correct accessibility attributes', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('maintains state after multiple toggles', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = getByRole('button');
    const thumb = button.querySelector('.toggle-thumb');

    // Начальное состояние
    expect(thumb).toHaveClass('light');

    // Первое переключение
    fireEvent.click(button);
    expect(thumb).toHaveClass('dark');

    // Второе переключение
    fireEvent.click(button);
    expect(thumb).toHaveClass('light');
  });
}); 
import { expect, describe, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  test('renders Heading', () => {
    render(<Home />);
    const main = within(screen.getByRole('main'));
    expect(main.getByRole('heading', { level: 1, name: /Hello, Workshop/i })).toBeVisible();
  });

  test('renders Profile Picture', () => {
    render(<Home />);
    const main = within(screen.getByRole('main'));
    expect(main.getAllByRole('img', { name: /Profile Picture/i })).toHaveLength(3);
  });
});

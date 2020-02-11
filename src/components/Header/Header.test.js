import React from 'react';
import { render, test, expect } from '@testing-library/react';
import Header from './Header';

test('renders component', () => {
  const { getByText } = render(<Header />);
  expect(getByText).toBeInTheDocument();
});

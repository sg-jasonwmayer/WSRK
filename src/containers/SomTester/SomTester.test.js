import React from 'react';
import { render, test, expect } from '@testing-library/react';
import SomTester from './SomTester';

test('renders to the DOM', () => {
  const { getByText } = render(<SomTester />);
  expect(getByText).toBeInTheDocument(<SomTester />);
});

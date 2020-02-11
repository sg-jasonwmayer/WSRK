import React from 'react';
import { render, test, expect } from '@testing-library/react';
import LoadPlanner from './LoadPlanner';

test('Renders Component to the DOM', () => {
  const { getByText } = render(<LoadPlanner />);
  expect(getByText).toBeInTheDocument("LoadPlanner");
});

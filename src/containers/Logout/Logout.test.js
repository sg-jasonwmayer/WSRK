import React from 'react';
import { render, test, expect } from '@testing-library/react';
import LoadPlanner from './LoadPlanner';

test.skip('Renders Component to the DOM', () => {
  const { getByText } = render(<LoadPlanner />);
  expect(getByText).toBeInTheDocument();
});

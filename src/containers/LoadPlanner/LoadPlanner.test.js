import React from 'react';
import { render } from '@testing-library/react';
import LoadPlanner from './LoadPlanner';

test.skip('renders learn react link', () => {
  const { getByText } = render(<LoadPlanner />);
  expect(getByText).toBeInTheDocument();
});

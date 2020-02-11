import React from 'react';
import { render, test, expect } from '@testing-library/react';
import Reports from './Reports';

test.skip('Renders Component to the DOM', () => {
  const { getByText } = render(<Reports />);
  expect(getByText).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import Reports from './Reports';

test.skip('renders learn react link', () => {
  const { getByText } = render(<Reports />);
  expect(getByText).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test.skip('renders learn react link', () => {
  const { getByText } = render(<Header />);
  expect(getByText).toBeInTheDocument();
});

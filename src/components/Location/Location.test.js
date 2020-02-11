import React from 'react';
import { render } from '@testing-library/react';
import Location from './Location';

test.skip('renders component', () => {
  const { getByText } = render(<Location />);
  expect(getByText).toBeInTheDocument();
});

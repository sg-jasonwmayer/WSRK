import React from 'react';
import { render } from '@testing-library/react';
import UserName from './UserName';

test.skip('renders component', () => {
  const { getByText } = render(<UserName />);
  expect(getByText).toBeInTheDocument();
});

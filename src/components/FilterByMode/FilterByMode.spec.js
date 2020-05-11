/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import FilterByMode from './FilterByMode';

test('renders component', () => {
  // eslint-disable-next-line react/jsx-no-undef
  const { getByText } = render(<FilterByMode />);
  expect(getByText).toBeInTheDocument();
});

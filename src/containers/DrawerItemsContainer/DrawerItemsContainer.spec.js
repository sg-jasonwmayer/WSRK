/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import DrawerItemsContainer from './DrawerItemsContainer';

test('renders component', () => {
  // eslint-disable-next-line react/jsx-no-undef
  const { getByText } = render(<DrawerItemsContainer />);
  expect(getByText).toBeInTheDocument();
});

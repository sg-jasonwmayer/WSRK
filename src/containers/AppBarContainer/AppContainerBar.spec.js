/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import AppBarContainer from './AppBarContainer';

test.skip('renders component', () => {
  const { getByText } = render(<AppBarContainer />);
  expect(getByText).toBeInTheDocument();
});

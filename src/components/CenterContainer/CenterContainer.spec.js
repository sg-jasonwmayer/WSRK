/* eslint-disable no-undef */

import React from 'react';
import { render } from '@testing-library/react';

import CenterContainer from './CenterContainer';

test('renders component', () => {
  const { getByText } = render(<CenterContainer />);
  expect(getByText).toBeInTheDocument();
});

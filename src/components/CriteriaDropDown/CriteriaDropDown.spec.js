/* eslint-disable no-undef */

import React from 'react';
import { render } from '@testing-library/react';

import CriteriaDropDown from './CriteriaDropDown';

test('renders component', () => {
  const { getByText } = render(<CriteriaDropDown />);
  expect(getByText).toBeInTheDocument();
});

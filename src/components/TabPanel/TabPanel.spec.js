
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import TabPanel from './TabPanel';

test.skip('renders component', () => {
  const { getByText } = render(<TabPanel />);
  expect(getByText).toBeInTheDocument();
});

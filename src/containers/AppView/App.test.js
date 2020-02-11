import React from 'react';
import { render } from '@testing-library/react';
import AppView  from './AppView';

test.skip('renders component', () => {
  const { getByText } = render(<AppView />);
  expect(getByText).toBeInTheDocument();
});

import React from 'react';
import { render, test, expect } from '@testing-library/react';
import AppView from './AppView';

test('renders component to the DOM', () => {
  const { getByText } = render(<AppView />);
  const linkElement = getByText(<AppView />);
  expect(linkElement).toBeInTheDocument();
});

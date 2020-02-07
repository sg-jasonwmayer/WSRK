import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the   Load Planner', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText( 'Load Planner' );
  expect(linkElement).toBeInTheDocument();
});

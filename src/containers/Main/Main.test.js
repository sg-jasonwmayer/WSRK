import React from 'react';
import { render, test, expect } from '@testing-library/react';
import Main from './Main';

test('Renders Component to the DOM', () => {
  const { getByText } = render(<Main />);
  expect(getByText).toBeInTheDocument();
});

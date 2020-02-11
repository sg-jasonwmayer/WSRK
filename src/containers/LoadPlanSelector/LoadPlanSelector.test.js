import React from 'react';
import { render, test, expect } from '@testing-library/react';
import LoadPlanSelector from './LoadPlanSelector';

test('Renders Component to the DOM', () => {
  const { getByText } = render(<LoadPlanSelector />);
  expect(getByText).toBeInTheDocument("LoadPlanSelector");
});

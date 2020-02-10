import React from 'react';
import { render } from '@testing-library/react';
import AppView from '../AppView/AppView';

test.skip('that the component renders on the page', () => {
  const { getByText } = render(<AppView />);
  const linkElement = getByText('Load Planner');
  expect(linkElement).toBeInTheDocument();
});

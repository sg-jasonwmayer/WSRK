import React from 'react';
import { render, expect, test } from '@testing-library/react';
import MillPlan from './MillPlan';

test(render(<MillPlan />, () => {
  expect().toBeInTheDocument(<MillPlan />);
}));

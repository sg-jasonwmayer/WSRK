/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import LoadPlanner  from './LoadPlanner';

describe('Loaad Planner Test Suite', () => {
    
const mockReport = () => {
  return {
    name: 'Location Summary',
    category: 'Locations',
    displayOrder: 0,
  };
};

describe('LoadPlanner', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        history: {},
        getPlanDetails: () => { },
        preferences: { isFetching: true, data: { language: 'en-US' }, error: null },
      };

    });

    it.skip('should display a LoadXpert LoadPlanner container', function () {
      expect().to.have.length(1);
    });
  });
});
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

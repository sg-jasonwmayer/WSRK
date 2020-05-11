/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import LoadPlanResultsToolbar  from './LoadPlanResultsToolbar';

describe.skip('Load Plan ResultsTest Suite', () => {
    
const mockReport = () => {
    <LoadPlanResultsToolbar />
  return {
    name: 'LoadPlanResultsToolbar',
    category: 'LoadPlanResultsToolbar',
    displayOrder: 0,
  };
};

describe.skip('LoadPlanResultsToolbar', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach.skip(function () {
      props = {
        history: {},
        getPlanDetails: () => { },
        preferences: { isFetching: true, data: { language: 'en-US' }, error: null },
      };

    });

    it.skip('should display a LoadXpert LoadPlanResultsToolbar container', function () {
      expect().to.have.length(1);
    });
  });
});
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import LoadPlanResults  from './LoadPlanResults';

describe('Load Plan ResultsTest Suite', () => {
    
const mockReport = () => {
    <LoadPlanResults />
  return {
    name: 'LoadPlanResults',
    category: 'LoadPlanResults',
    displayOrder: 0,
  };
};

describe('LoadPlanResults', function () {
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

    it.skip('should display a LoadXpert LoadPlanResults container', function () {
      expect().to.have.length(1);
    });
  });
});
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

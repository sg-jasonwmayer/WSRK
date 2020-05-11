/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import OptimizedFilter  from './OptimizedFilter';

describe('Load Plan ResultsTest Suite', () => {
    
const mockReport = () => {
    <OptimizedFilter />
  return {
    name: 'OptimizedFilter',
    category: 'OptimizedFilter',
    displayOrder: 0,
  };
};

describe('OptimizedFilter', function () {
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

    it.skip('should display a LoadXpert OptimizedFilter container', function () {
      expect().to.have.length(1);
    });
  });
});
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

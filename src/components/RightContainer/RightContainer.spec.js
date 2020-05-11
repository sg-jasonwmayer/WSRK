/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import RightContainer  from './RightContainer';

describe('Load Plan ResultsTest Suite', () => {
    
const mockReport = () => {
    <RightContainer />
  return {
    name: 'RightContainer',
    category: 'RightContainer',
    displayOrder: 0,
  };
};

describe('RightContainer', function () {
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

    it.skip('should display a LoadXpert RightContainer container', function () {
      expect().to.have.length(1);
    });
  });
});
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

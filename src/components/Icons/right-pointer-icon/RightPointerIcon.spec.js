/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import RightPointerIcon from './RightPointerIcon';

/**
 * The actual component unit test
 */
describe('RightPointerIcon', function () {
  describe('smoke test', function () {
    let wrapper;

    beforeEach(function () {
      wrapper = shallow(<RightPointerIcon />);
    });

    it('should display a RightPointerIcon', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

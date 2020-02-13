/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import Beer from 'react-icons/lib/fa/beer';
import Button from './Button';

/**
 * The actual component unit test
 */
describe('Button', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        action: () => {},
      };
      wrapper = shallow(<Button {...props}>Save User</Button>);
    });

    it('should display a primary button', function () {
      expect(wrapper.find('button')).to.have.length(1);
    });
  });

  describe('basic properties', function () {
    let props;
    let wrapper;
    const handler = sinon.spy();

    beforeEach(function () {
      props = {
        type: 'submit',
        category: 'primary',
        action: handler,
        icon: Beer,
        iconDirection: 'left',
      };

      wrapper = mount(<Button {...props}>Let&apos;s have a beer!</Button>);
    });

    it('should have a type of submit', function () {
      expect(wrapper.prop('type')).to.equal('submit');
    });

    it('should call handler when clicked', function () {
      const submitButton = wrapper.find('button');

      submitButton.simulate('click');

      expect(handler.calledOnce).to.be.true;
    });

    it('should have a category type of primary', function () {
      expect(wrapper.prop('category')).to.equal('primary');
    });

    it('should have an icon', function () {
      const submitButton = wrapper.find('button');

      expect(submitButton.find('IconBase')).to.have.length(1);
    });

    it('should designate the button icon placement as left', function () {
      expect(wrapper.prop('iconDirection')).to.equal('left');
    });

    it('should not be disabled', function () {
      expect(wrapper.prop('disabled')).to.be.false;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

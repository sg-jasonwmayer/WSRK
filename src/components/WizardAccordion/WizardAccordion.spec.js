/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import WizardAccordion from './WizardAccordion';

/**
 * The actual component unit test
 */
describe('WizardAccordion', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        headerText: '',
        isOpen: false,
        toggleAccordion: () => {},
        content: null,
      };
      wrapper = shallow(<WizardAccordion {...props} />);
    });

    it('should display a WizardAccordion', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        headerText: 'Type & Description',
        isOpen: false,
        toggleAccordion: handler,
        content: <span>Foo</span>,
        linkButtonText: 'Cancel',
        secondaryButtonText: 'Reset',
        primaryButtonText: 'Save & Next',
      };

      wrapper = mount(<WizardAccordion {...props} />);
    });

    it('should toggle on click', function () {
      const headerTarget = wrapper.find('.wizard-accordion__header');

      wrapper.setProps({ isOpen: true });

      headerTarget.simulate('click');

      expect(handler.calledOnce).to.be.true;
      expect(wrapper.props().isOpen).to.be.true;
    });

    it('should have header text that matches the props', function () {
      const headline = wrapper.find('.wizard-accordion__headline');
      expect(headline.text()).to.equal(wrapper.props().headerText);
    });

    it('should have 3 buttons', function () {
      wrapper.setProps({ isOpen: true });
      const buttons = wrapper.find('.button');
      expect(buttons).to.have.length(3);
    });

    it('should only have a primary button', function () {
      wrapper.setProps({
        secondaryButtonText: '',
        linkButtonText: '',
        isOpen: true,
      });
      const button = wrapper.find('.button');
      expect(button).to.have.length(1);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */

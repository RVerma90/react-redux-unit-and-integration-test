import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {

  describe('Checking PropTypes', () => {

    it('should NOT throw an warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBe();
    });

  });

  describe('Renders', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });


  });


  
});
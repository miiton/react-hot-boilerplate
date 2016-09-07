import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Hello, HelloTable} from './Hello';

/* eslint-disable */
describe('This test', () => {
  it('should be pass', () => {
    expect(true).to.be.true;
  });
});
/* eslint-enable */

describe('<Hello />', () => {
  it('should be render have 1 <HelloTable />', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.containsAllMatchingElements([
      <HelloTable />,
    ])).to.equal(true);
  });
});

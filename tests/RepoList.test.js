import React from 'react';
import RepoList from '../client/src/components/RepoList';
import { mount } from 'enzyme';

describe('<RepoList />', () => {
  it('should have a div element has outermost node', () => {
    const wrapper = mount(<RepoList repos={[]}/>);
    expect(wrapper.exists('div')).toEqual(true);
    // expect(wrapper.find('div').parent().exists()).toEqual(false);
    expect(wrapper.find('div').children().exists()).toEqual(true);
  })
});
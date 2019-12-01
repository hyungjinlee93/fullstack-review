import React from 'react';
import RepoList from '../client/src/components/RepoList';
import { mount } from 'enzyme';

describe('<RepoList />', () => {
  it('should have a div element as the first child containing table elements', () => {
    const wrapper = mount(<RepoList repos={[]}/>);
    expect(wrapper.children().find('div').parent().is('RepoList')).toEqual(true);
    expect(wrapper.find('div').children().exists()).toEqual(true);
    expect(wrapper.find('table').parent().is('div')).toEqual(true);
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import ProjectDashboard from '../projects/ProjectDashboard';
import ProjectList from '../projects/ProjectList';
let wrapped;
beforeEach(() => {
  wrapped = shallow(<ProjectDashboard />);
});
afterEach(() => {
  wrapped.unmount();
});
it('has a list of users projects', () => {
  expect(wrapped.find(ProjectList).length).toEqual(1);
});

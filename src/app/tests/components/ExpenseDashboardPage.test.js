import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

configure({ adapter: new Adapter() });

test('should render ExpenseDashboardPage with expense', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

configure({ adapter: new Adapter() });

test('should render ExpenseListItem with expense', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
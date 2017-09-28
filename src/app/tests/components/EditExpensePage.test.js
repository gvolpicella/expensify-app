import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

configure({ adapter: new Adapter() });

let editExpense, removeExpense, id, history, wrapper;

beforeEach(() => {
  id = expenses[1].id;
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
                        editExpense={editExpense} 
                        removeExpense={removeExpense}
                        expense={expenses[1]}
                        history={history} 
                    />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should edit expense onSubmit', () => {
  const data = {
    description: 'abc123',
    note: expenses[1].note,
    amount: expenses[1].amount,
    createdAt: expenses[1].createdAt
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(data);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(id, data);
});

test('should remove expense on button click', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id });
});

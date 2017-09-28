import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const expense = { 
    id : '109',
    description : 'expense 1', 
    note : '', 
    amount : 69500, 
    createdAt : 20000 
  }; 
  const action = { 
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
}); 

test('should edit expense by id', () => {
  const amount = 40000;
  const action = { 
    type: 'EDIT_EXPENSE',
    id : expenses[0].id,
    updates : {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit expense if not id', () => {
  const amount = 40000;
  const action = { 
    type: 'EDIT_EXPENSE',
    id : '-1',
    updates : {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
}); 

test('should not remove expense if id not found', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
}); 
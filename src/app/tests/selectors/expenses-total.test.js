import { getExpensesTotal, getExpensesCount } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test('Should correctly add up multiple expenses', () => {  
  const total = getExpensesTotal(expenses);
  let totalAmount = 0;
  if (expenses.length > 0) {
      const amounts = expenses.map( (expense) => expense.amount );
      totalAmount = amounts.reduce( (prev, curr) => prev + curr );
  }
  expect(total).toBe(totalAmount);
});

test('Should return 0 if array empty', () => {
  const count = getExpensesCount([]);
  expect(count).toBe(0);
});

test('Should return number of expenses', () => {  
  const count = getExpensesCount(expenses);
  expect(count).toBe(expenses.length);
});
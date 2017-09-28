import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(defaultState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
  const text = '123abc';
  const action = { 
    type: 'SET_TEXT_FILTER', 
    text 
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// should set startDate filter
test('should set start date filter', () => {
  const startDate = moment().startOf('month');
  const action = { 
    type: 'SET_START_DATE', 
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment().startOf('month'));
});

// should set endDate filter
test('should set end date filter', () => {
  const endDate = moment().endOf('month');
  const action = { 
    type: 'SET_END_DATE', 
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment().endOf('month'));
});
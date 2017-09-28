import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

export default [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 115,
  createdAt: 0
},{
  id: '2',
  description: 'rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  description: 'Credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
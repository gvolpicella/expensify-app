import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import { getExpensesTotal, getExpensesCount } from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="expenses-summary">
      <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: getExpensesCount(visibleExpenses),
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

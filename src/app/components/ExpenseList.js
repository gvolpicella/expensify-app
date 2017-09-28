// Presentational component pattern
// stateless functional component
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <div className="expenses">
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            )
        : (
            props.expenses.map((expense, index) => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))
        )
        }                
        </div>
    </div>
);

// maps the store to props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// Higher order component (HOC) for our expenses
// generates ExpenseList components connected to Store
export default connect(mapStateToProps)(ExpenseList);

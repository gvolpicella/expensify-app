import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
            buttonText: props.expense ? 'Save expense'  : 'Add expense'
        };
    };   
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };    
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }  
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused : focused }));
    };   
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set error state
            this.setState(() => ({ error: 'Please enter a description and amount.' }));
        }

        if (this.state.description && this.state.amount) {
            // clear error
            this.setState(() => ({ error: '' }));
            // wiring up the parent component with the state
            this.props.onSubmit({
                description : this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                { this.state.error && <p className="error">{ this.state.error }</p>}
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="description">Description</label>
                    <input 
                        name="description" 
                        type="text"
                        placeholder="Description"
                        autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /><br/><br/>
                    <label htmlFor="amount">Amount</label>
                    <input 
                        name="amount" 
                        type="text"
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    /><br/><br/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ () => {false} }
                        displayFormat="DD MMM YYYY"
                    /><br/><br/>
                    <label htmlFor="notes">Notes</label>
                    <textarea 
                        name="note" 
                        placeholder="Enter a note for your expenses" 
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    /><br/><br/>
                    <button type="submit">{this.state.buttonText}</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;
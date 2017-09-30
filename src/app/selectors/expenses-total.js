
export const getExpensesTotal = (expenses) => {
    let total = 0;
    if (typeof expenses != "undefined" && expenses != null && expenses.length > 0) {
        total = expenses
            .map((expense) => expense.amount )
            .reduce((sum, value) => sum + value );
    }
    return total;
};

export const getExpensesCount = (expenses) => {
    return expenses.length;
};

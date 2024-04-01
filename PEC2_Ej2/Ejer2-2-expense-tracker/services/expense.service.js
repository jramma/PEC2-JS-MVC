/**
 * @class ExpenseService
 *
 * Manages the data of the application.
 */
class ExpenseService {
  constructor() {
    this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map(
      expense => new Expense(expense)
    );
  }

  bindExpenseListChanged(callback) {
    this.onExpenseListChanged = callback;
  }

  _commit(expenses) {
    this.onExpenseListChanged(expenses);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  addExpense(expenseData) {
    this.expenses.push(new Expense(expenseData));

    this._commit(this.expenses);
  }

  editExpense(id, updatedExpenseData) {
    this.expenses = this.expenses.map(expense =>
      expense.id === id
        ? new Expense({
            ...expense,
            ...updatedExpenseData
          })
        : expense
    );

    this._commit(this.expenses);
  }

  deleteExpense(_id) {
    this.expenses = this.expenses.filter(({ id }) => id !== _id);

    this._commit(this.expenses);
  }
}

export default ExpenseService;
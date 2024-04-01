/**
 * @class ExpenseController
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class ExpenseController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Explicit binding
    this.model.bindExpenseListChanged(this.onExpenseListChanged);
    this.view.bindAddExpense(this.handleAddExpense);
    this.view.bindDeleteExpense(this.handleDeleteExpense);
    this.view.bindEditExpense(this.handleEditExpense);

    // Display initial expenses
    this.onExpenseListChanged(this.model.expenses);
  }

  onExpenseListChanged = (expenses) => {
    this.view.displayExpenses(expenses);
  };

  handleAddExpense = (expense) => {
    if (this.model.editingExpense) {
      // Estamos en modo de edición, actualizar la transacción
      this.model.updateExpense(this.model.editingExpense.id, expense);
    } else {
      // No estamos en modo de edición, crear una nueva transacción
      this.model.addExpense(expense);
    }
  };

  handleDeleteExpense = (id) => {
    this.model.deleteExpense(id);
  };

  handleEditExpense = (id) => {
    this.model.editingExpense = this.model.findExpense(id);
    this.view.inputText.value = this.model.editingExpense.text;
    this.view.inputAmount.value = this.model.editingExpense.amount;
  };
}

export default ExpenseController;
/**
 * @class ExpenseView
 *
 * Visual representation of the model.
 */
class ExpenseView {
  constructor() {
    this.app = this.getElement("#root");
    this.form = this.getElement("#form");
    this.inputText = this.getElement("#text");
    this.inputAmount = this.getElement("#amount");
    this.expenseList = this.getElement("#list");
    this.submitButton = this.getElement('#submit');
    this._temporaryExpenseText = "";
    this._temporaryExpenseAmount = "";
    this._initLocalListeners();
  }

  get _expenseText() {
    return this.inputText.value;
  }

  get _expenseAmount() {
    return this.inputAmount.value;
  }

  _resetInput() {
    this.inputText.value = "";
    this.inputAmount.value = "";
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayExpenses(expenses) {
    // Delete all nodes
    while (this.expenseList.firstChild) {
      this.expenseList.removeChild(this.expenseList.firstChild);
    }

    // Create nodes
    expenses.forEach((expense) => {
      const li = this.createElement("li");
      li.id = expense.id;

      const span = this.createElement("span");
      span.contentEditable = true;
      span.classList.add("editable");

      span.textContent = `${expense.text}: ${expense.amount}`;

      const deleteButton = this.createElement("button", "delete-btn");
      deleteButton.textContent = "🗑️";
      const editButton = this.createElement("button", "edit-btn");
      editButton.textContent = "✏️";
      
      li.append(span, deleteButton, editButton); // Append edit button

      // Append nodes
      this.expenseList.append(li);
    });

    // Debugging
    console.log(expenses);
  }

  _initLocalListeners() {
    this.expenseList.addEventListener("input", (event) => {
      if (event.target.className === "editable") {
        this._temporaryExpenseText = event.target.innerText;
      }
    });
  }

  bindAddExpense(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._expenseText && this._expenseAmount) {
        handler({
          text: this._expenseText,
          amount: this._expenseAmount,
        });
        
        // Cambiar el texto del botón a "Add transaction" y el color de fondo a su valor original
        this.submitButton.innerText = 'Add transaction';
        this.submitButton.style.backgroundColor = ''; // o el color original que tenías

        this._resetInput();
      }
    });
  }

  bindDeleteExpense(handler) {
    this.expenseList.addEventListener("click", (event) => {
      if (event.target.className === "delete-btn") {
        const id = event.target.parentElement.id;

        handler(id);
      }
    });
  }

  bindEditExpense(handler) {
    this.expenseList.addEventListener('click', event => {
      if (event.target.className === 'edit-btn') {
        const id = parseInt(event.target.parentElement.id);
        
        // Cambiar el texto del botón a "Update transaction" y el color de fondo a azul
        this.submitButton.innerText = 'Update transaction';
        this.submitButton.style.backgroundColor = 'blue';

        handler(id);
      }
    });
  }
}

export default ExpenseView;

const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

let editingTransaction = null;
const submitButton = document.getElementById('submit');

function editTransaction(id) {
  editingTransaction = transactions.find(transaction => transaction.id === id);

  text.value = editingTransaction.text;
  amount.value = editingTransaction.amount;

  submitButton.innerText = 'Update transaction';
  submitButton.classList.add('update');

  form.removeEventListener('submit', addTransaction);
  form.addEventListener('submit', updateTransaction);
}

function updateTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    editingTransaction.text = text.value;
    editingTransaction.amount = +amount.value;

    init();
    updateLocalStorage();

    editingTransaction = null;

    submitButton.innerText = 'Add transaction';
    submitButton.classList.remove('update');

    form.removeEventListener('submit', updateTransaction);
    form.addEventListener('submit', addTransaction);
  }

  text.value = '';
  amount.value = '';
}

// ...

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    if (editingTransaction) {
      editingTransaction.text = text.value;
      editingTransaction.amount = +amount.value;

      init();
      updateLocalStorage();

      editingTransaction = null;

      submitButton.innerText = 'Add transaction';
      submitButton.classList.remove('update');
    } else {
      const transaction = {
        id: generateID(),
        text: text.value,
        amount: +amount.value
      };

      transactions.push(transaction);

      addTransactionDOM(transaction);

      updateValues();

      updateLocalStorage();
    }

    text.value = '';
    amount.value = '';
  }
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> 
    <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">🗑️</button>
    <button class="edit-btn" onclick="editTransaction(${
    transaction.id
  })">✏️</button>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);
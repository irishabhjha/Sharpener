const expenseForm = document.getElementById("expense-form");
const expenseAmount = document.getElementById("expense-amount");
const expenseDescription = document.getElementById("expense-description");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!expenseAmount.value || !expenseDescription.value || !expenseCategory.value) {
    return;
  }

  const expense = document.createElement("li");
  expense.innerHTML = `
    <span>${expenseAmount.value} - ${expenseDescription.value} - ${expenseCategory.value}</span>
    <button class="delete-expense">Delete</button>
  `;

  expenseList.appendChild(expense);

  expenseAmount.value = "";
  expenseDescription.value = "";
  expenseCategory.value = "";

  expense.querySelector(".delete-expense").addEventListener("click", () => {
    expense.remove();
  });
});
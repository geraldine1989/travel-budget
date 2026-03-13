import { useState } from "react";

function ExpenseList({ expenses, setExpenses }) {
  const [editingExpense, setEditingExpense] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedAmount, setEditedAmount] = useState("");

  const displayExpenseInputs = (id) => {
    setEditingExpense(id);
  };

  const handleEditExpense = (id) => {
    if ((!editedName && !editedAmount) || isNaN(editedAmount) || editedAmount < 0) return;

    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === id) {
        return {
          ...expense,
          name: editedName || expense.name,
          amount: parseFloat(editedAmount) || expense.amount,
        };
      }
      return expense;
    });

    setExpenses(updatedExpenses);
    setEditingExpense(null);
    setEditedName("");
    setEditedAmount("");
  };

  return (
    <div className="grid col-span-3 md:col-span-2 shadow rounded-2xl bg-light p-2 w-full md:w-2/3 mx-auto">
      <h2 className="text-primary font-bold uppercase text-sm mb-4">
        Liste des dépenses
      </h2>
      <div className="grid grid-cols-3 gap-2 text-left">
        <div className="uppercase text-sm font-semibold text-secondary">
          Dépense
        </div>
        <div className="uppercase text-sm font-semibold text-secondary">
          Montant
        </div>
        <div className="uppercase text-sm font-semibold text-secondary">
          Actions
        </div>
        <ul className="col-span-3">
          {expenses.map((expense) =>
            editingExpense === expense.id ? (
              <li
                key={expense.id}
                className="grid grid-cols-3 gap-2 items-center mb-2"
              >
                <input
                  type="text"
                  defaultValue={expense.name}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="input input-bordered w-full"
                />
                <input
                  type="number"
                  defaultValue={expense.amount}
                  onChange={(e) => setEditedAmount(e.target.value)}
                  min="0"
                  step="0.01"
                  className="input input-bordered w-full"
                />
                <div className="flex items-center mb-4 gap-2">
                    <button
                        className="btn btn-primary btn-sm text-left w-fit"
                        onClick={() => handleEditExpense(expense.id)}
                    >
                        Valider
                    </button>
                        <button
                        className="btn btn-secondary-reverse btn-sm text-left w-fit"
                        onClick={() => setEditingExpense(null)}
                    >
                        Annuler
                    </button>
                </div>
              </li>
            ) : (
              <li
                key={expense.id}
                className="grid grid-cols-3 gap-2 items-center mb-2"
              >
                <span>{expense.name}</span>
                <span>{expense.amount} €</span>
                <div className="flex gap-4">
                  <button
                    className="btn btn-secondary-reverse btn-sm text-left w-fit flex items-center gap-1"
                    onClick={() => {
                      displayExpenseInputs(expense.id);
                    }}
                    aria-label="Display expense inputs"
                  >
                    <span className="hidden md:flex">Modifier</span>
                    <img
                      src="./icons/edit-secondary.svg"
                      alt="Edit"
                      className="w-5"
                    />
                  </button>
                  <button
                    className="w-6 cursor-pointer"
                    onClick={() =>
                      setExpenses(expenses.filter((e) => e.id !== expense.id))
                    }
                    aria-label="Remove expense"
                  >
                    <img src="./icons/trash-primary.svg" alt="Remove" />
                  </button>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
export default ExpenseList;

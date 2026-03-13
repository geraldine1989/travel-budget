import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExpenseForm({ expenses, setExpenses }) {
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const navigate = useNavigate();

    const handleAddExpense = () => {
        if (expenseName && expenseAmount && !isNaN(expenseAmount) && expenseAmount >= 0) {
            const newExpense = {
                id: Date.now(),
                name: expenseName,
                amount: parseFloat(expenseAmount)
            };
            setExpenses([...expenses, newExpense]);
            setExpenseName('');
            setExpenseAmount('');
            navigate("/");
        }
    }
  return (
    <main className="flex flex-col items-center">
        <div className="shadow rounded-2xl bg-light p-2 w-full md:w-2/3 mx-auto">
            <h2 className="text-primary font-bold uppercase text-sm mb-4">Ajoute une dépense</h2>
            <div className="field">
                <label className="text-secondary text-left" htmlFor="expense-name">Dépense</label>
                <input
                id="expense-name"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                className="input"
                type="text"
                placeholder="Ex: Hôtel"
                autoFocus
                />
            </div>
            <div className="field">
                <label className="text-secondary text-left" htmlFor="expense-amount">Montant</label>
                <input
                    id="expense-amount"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    className="input"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Ex: 100"
                />
            </div>
            <div className="mt-2 w-full flex flex-wrap flex-col-reverse md:flex-row justify-end gap-2">
                <button className="btn btn-secondary w-full md:w-fit" onClick={() => navigate("/")}>
                    Retour
                </button>
                <button className="btn btn-primary w-full md:w-fit" onClick={handleAddExpense}>
                    Ajouter
                </button>
            </div>
        </div>
    </main>
  )
}
export default ExpenseForm  
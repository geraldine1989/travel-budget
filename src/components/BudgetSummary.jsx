function BudgetSummary({ total, totalExpenses }) {
    const remainingBudget = total - totalExpenses;
    return (
        <div className="flex justify-around flex-wrap gap-4">
            <div className="text-primary font-bold md:text-2xl">
                Budget : {total.toFixed(2)} €
            </div>
            <div className="text-tertiary font-bold md:text-2xl">
                Dépenses : {totalExpenses.toFixed(2)} €
            </div>
            {total > 0 && (
                <div className={`font-bold md:text-xl w-full text-center ${remainingBudget > 0 ? 'text-secondary' : 'text-primary'}`}> 
                    Restant : {remainingBudget.toFixed(2)} €
                </div>
            )}
        </div>
    );
}

export default BudgetSummary;
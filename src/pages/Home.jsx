import ExpenseList from '../components/ExpenseList';
import { Link } from 'react-router-dom';

function Home({ total, expenses, setExpenses }) {
  return (
    <main className="flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 text-center">Bienvenue sur Travel Budget</h2>
      <div className="flex flex-col md:flex-row justify-center mb-6 items-center gap-3 mt-2">
        <Link to="/budget" className="btn btn-primary w-full md:w-auto">{total ? `Modifier budget` : `Mon budget`}</Link>
        { total > 0 && (
          <Link to="/expense" className="btn btn-tertiary w-full md:w-auto">Ajouter une dépense</Link>
        )}
      </div>
      {expenses.length > 0 ? (
        <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      ) : (
        <div>
          <p className="text-primary mb-2 text-center">Planifie ton voyage et gère tes dépenses en toute simplicité.</p>
          <p className="text-primary mb-2 text-center">Ajoute tes dépenses et suis ton budget en temps réel !</p>
        </div>
      )}
    </main>
  )
}
export default Home
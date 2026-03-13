import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import BudgetSummary from './BudgetSummary';

export default function Header({totalExpenses, total}) {

    return (
        <header className="flex flex-col items-center">
            <div className="font-bold bg-quaternary p-5 md:p-6 flex items-start gap-4 w-full">
                <Link to="/" >
                    <img src="/logo.svg" alt="Travel Budget Logo" className="w-10 h-10 md:w-20 md:h-20" />
                </Link>
                <h1 className="text-secondary text-2xl md:text-3xl md:pt-3">Travel Budget</h1>
            </div>
            <div className="p-3 md:p-6 rounded-2xl shadow w-[90%] md:w-2/3 bg-light -mt-3 md:-mt-6 flex flex-col gap-4">
                <BudgetSummary total={total} totalExpenses={totalExpenses} />
                <ProgressBar total={total} totalExpenses={totalExpenses} />
            </div>
        </header>
    );
}
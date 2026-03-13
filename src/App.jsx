import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Budget from "./pages/Budget";
import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";

export default function App() {
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <BrowserRouter>
    <Header total={total} totalExpenses={totalExpenses} />
    <Routes>
      <Route path="/" element={<Home total={total} expenses={expenses} setExpenses={setExpenses} />} />
      <Route path="/budget" element={<Budget  total={total} setTotal={setTotal}/>} />
      <Route path="/expense" element={<ExpenseForm total={total} setTotal={setTotal} expenses={expenses} setExpenses={setExpenses} />} />
    </Routes>
  </BrowserRouter>
  )
}

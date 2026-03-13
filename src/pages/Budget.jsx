import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Budget({ total, setTotal }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(total || '');
  const handleTotalChange = () => {
    if (isNaN(inputValue) || inputValue === '') {
      setTotal(0);
    } else {
      setTotal(parseFloat(inputValue));
    }
    navigate("/");
  }

  return (
    <main className="flex flex-col items-center">
      <div className="shadow rounded-2xl bg-light p-2 w-full md:w-2/3 mx-auto">
        <h2 className="text-primary font-bold uppercase text-sm mb-4">Mon budget total</h2>
          <div className="field">
            <label className="text-secondary text-left" htmlFor="total">Budget</label>
            <input
                id="total"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="input"
                type="number"
                min="0"
                placeholder="Ex: 1000"
                autoFocus
            />
          </div>
          <div className="mt-2 w-full flex flex-col-reverse md:flex-row flex-wrap justify-end gap-2">
            <button className="btn btn-secondary w-full md:w-fit" onClick={() => navigate("/")}>
              Retour
            </button>
            <button className="btn btn-primary w-full md:w-fit" onClick={handleTotalChange}>
              Valider
            </button>
          </div>
        </div>
    </main>
  );
}
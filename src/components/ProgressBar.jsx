import React from "react";

const ProgressBar = ({ total, totalExpenses }) => {
    const percentage = (totalExpenses > total ? 100 : total > 0 ? totalExpenses / total * 100 : 0);
    const progressBarColor = percentage > 100 ? 'bg-primary' : percentage > 75 ? 'bg-secondary' : percentage > 50 ? 'bg-tertiary' : 'bg-quaternary';
    
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div 
            className={`h-full transition-all duration-500 ease-out ${progressBarColor}`} 
            style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;

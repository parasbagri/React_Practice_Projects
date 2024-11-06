import React from 'react';

const CurrencyDropdown = ({ selectedCurrency, onChange }) => {
  const currencies = ['USD', 'INR', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY'];

  return (
    <select value={selectedCurrency} onChange={(e) => onChange(e.target.value)} className='text-black outline-none'>
      {currencies.map((currency) => (
        <option className='text-cyan-500 bg-slate-800' key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;


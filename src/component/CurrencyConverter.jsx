import React, { useState, useEffect } from 'react';
import { useCurrencyConverter } from '../hooks/useCurrencyConverter';
import CurrencyDropdown from './CurrencyDropdown';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const { rates, fetchRates, error } = useCurrencyConverter(fromCurrency);

  useEffect(() => {
    fetchRates();
  }, [fromCurrency]);

  const handleConvert = () => {
    if (rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(null);
  };

  return (
    <div className='w-full h-screen flex items-center text-slate-50 '>
       <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }} className='bg-slate-800 bg-opacity-50 flex flex-col w-1/2 gap-6 res '>
      <h3 className='text-lg text-center font-bold'>Currency Exchange</h3>
      <div className='flex gap-2'>
        <label>From :</label>
        <CurrencyDropdown selectedCurrency={fromCurrency} onChange={setFromCurrency} />
      </div>
      <div className='flex gap-2'>
        <label>To&ensp;&ensp;&ensp;:</label>
        <CurrencyDropdown selectedCurrency={toCurrency} onChange={setToCurrency} />
      </div>
      <div>
        <label>Amount :&ensp;</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='text-black text-center outline-none w-36 '
        />
      </div>
      <button
        onClick={handleSwap}
        className="relative z-[1] px-1 py-1 rounded-[15px]  text-[15px] text-[#212121] 
        bg-[#e8e8e8] shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] transition-all duration-250 overflow-hidden
        hover:text-[#e8e8e8]
        before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0
        before:rounded-[15px] before:bg-[#212121] before:z-[-1]
        before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 
        hover:before:w-full"
      >
        Swap
        
      </button>

      <button onClick={handleConvert}
        className="relative z-[1] px-1 py-1 rounded-[15px]   text-[15px] text-[rgb(33,33,33)] 
        bg-[#e8e8e8] shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] transition-all duration-250 overflow-hidden
        hover:text-[#e8e8e8]
        before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0
        before:rounded-[15px] before:bg-[#212121] before:z-[-1]
        before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 
        hover:before:w-full"
      >Convert
      
      </button>
      {convertedAmount !== null && (
        <div>
          <p>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  );
};

export default CurrencyConverter;

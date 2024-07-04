import React, { useState } from 'react';

function MortgageCalculator() {
    console.log('MortgageCalculator loaded');
    const [mortgageAmount, setMortgageAmount] = useState(0);
    const [mortgageTerm, setMortgageTerm] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [result, setResult] = useState(0);

    const calculateRepayments = () => {
        const total = Number(mortgageAmount) + Number(mortgageTerm) + Number(interestRate);
        setResult(total);
    };

    return (
        <div className="mortgage-calculator">
            <h2>Mortgage Calculator</h2>
            <label>
                Mortgage Amount (£):
                <input type="number" value={mortgageAmount} onChange={e => setMortgageAmount(e.target.value)} />
            </label>
            <label>
                Mortgage Term (years):
                <input type="number" value={mortgageTerm} onChange={e => setMortgageTerm(e.target.value)} />
            </label>
            <label>
                Interest Rate (%):
                <input type="number" value={interestRate} onChange={e => setInterestRate(e.target.value)} />
            </label>
            <button onClick={calculateRepayments}>Calculate Repayments</button>
            <div className="results">
                <h2>Your results</h2>
                <p>Total: £{result}</p>
            </div>
        </div>
    );
}

export default MortgageCalculator;

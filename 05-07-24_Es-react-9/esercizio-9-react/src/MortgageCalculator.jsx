import React, { useState, useEffect } from 'react';
import './MortgageCalculator.css';

function MortgageCalculator() {
    const [mortgageAmount, setMortgageAmount] = useState('');
    const [mortgageTerm, setMortgageTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [showMonthly, setShowMonthly] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (mortgageAmount && mortgageTerm && interestRate) {
            calculateRepayments();
        }
    }, [mortgageAmount, mortgageTerm, interestRate, showMonthly]);

    const calculateRepayments = () => {
        const amount = parseFloat(mortgageAmount);
        const term = parseInt(mortgageTerm, 10);
        const rate = parseFloat(interestRate) / 100 / 12;
        const n = term * 12;
        const monthlyRepayment = amount * rate / (1 - (Math.pow(1 / (1 + rate), n)));
        const totalRepayment = monthlyRepayment * n;

        setResult({
            monthlyRepayment: monthlyRepayment.toFixed(2),
            totalRepayment: totalRepayment.toFixed(2)
        });
    };

    return (
        <div className="mortgage-calculator">
            <div className="calculator-inputs">
                <h2>Mortgage Calculator</h2>
                <label>
                    Mortgage Amount (£):
                    <input
                        type="number"
                        value={mortgageAmount}
                        onChange={e => setMortgageAmount(e.target.value)}
                    />
                </label>
                <label>
                    Mortgage Term (years):
                    <input
                        type="number"
                        value={mortgageTerm}
                        onChange={e => setMortgageTerm(e.target.value)}
                    />
                </label>
                <label>
                    Interest Rate (%):
                    <input
                        type="number"
                        value={interestRate}
                        onChange={e => setInterestRate(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={showMonthly}
                        onChange={e => setShowMonthly(e.target.checked)}
                    />
                    Show Monthly Repayment
                </label>
            </div>
            <div className="results">
                {result && (
                    <>
                        <h2>Your results</h2>
                        {showMonthly ? (
                            <p>Monthly Repayment: £{result.monthlyRepayment}</p>
                        ) : (
                            <p>Total Repayment: £{result.totalRepayment}</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default MortgageCalculator;

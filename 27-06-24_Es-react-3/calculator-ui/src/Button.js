import React from 'react';
import './Button.css';

function Button({ value }) {
    const isOperator = ['+', '-', 'X', '/', '='].includes(value);
    const isSpecial = ['AC', '+/-', '%', 'Reset'].includes(value);

    return (
        <button className={`button ${isOperator ? 'operator' : ''} ${isSpecial ? 'special' : ''}`}>
            {value}
        </button>
    );
}

export default Button;

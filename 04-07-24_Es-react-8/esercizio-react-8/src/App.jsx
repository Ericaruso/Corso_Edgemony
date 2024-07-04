import React from 'react';
import MortgageCalculator from './MortgageCalculator';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="calculator-container">
        <MortgageCalculator />
      </div>
      <div className="image-panel">
        <img src="url_dell_immagine" alt="Descrizione dell'immagine" />
      </div>
    </div>
  );
}

export default App;

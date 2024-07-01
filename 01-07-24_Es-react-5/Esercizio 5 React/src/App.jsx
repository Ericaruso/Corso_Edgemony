import "./index.css";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleRandomClick = () => {
    const randomNums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
    setRandomNumbers(randomNums);
  };

  return (
    <>
      <h1>Quanti tramonti hai visto quest'estate?🌞</h1>
      <br />
      <img src="/sunset sea.jpg" alt="Sunset" />
      <br />
      <Counter />
      <br />
      <h2>🔮 I tuoi numeri per un'estate fortunata:</h2>
      <p>{randomNumbers.join(", ")}</p>
      <button className="random-button" onClick={handleRandomClick}>
        Scopri i numeri!
      </button>
    </>
  );
}

export default App;

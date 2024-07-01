import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleClick = (event) => {
        return event.target.id === "add"
            ? setCounter(counter + 1)
            : setCounter(counter - 1);
    };

    return (
        <div className="counter-container">
            <button
                className="counter-button"
                disabled={counter === 0}
                id="sub"
                onClick={(e) => handleClick(e)}
            >
                -
            </button>
            <span className="counter-text">Tramonti visti: {counter}</span>
            <button
                className="counter-button"
                
                id="add"
                onClick={(e) => handleClick(e)}
            >
                +
            </button>
        </div>
    );
}

export default Counter;

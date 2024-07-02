import React, { useState } from 'react';
import styles from './AdviceGenerator.module.css';
import patternDivider from '../assets/pattern-divider-desktop.svg';

const advices = [
    "Once you find a really good friend don't do anything that could mess up your friendship.",
    "If you are feeling down, try holding a pencil between your top lip and your nose for five minutes.",
    "Don't always rely on your comforts.",
    "Drink a glass of water before meals.",
    "Everything matters, but nothing matters that much."
];

const AdviceGenerator = () => {
    const [advice, setAdvice] = useState(advices[Math.floor(Math.random() * advices.length)]);

    const getRandomAdvice = () => {
        const randomIndex = Math.floor(Math.random() * advices.length);
        setAdvice(advices[randomIndex]);
    };

    return (
        <div className={styles.adviceContainer}>
            <div className={styles.adviceCard}>
                <p className={styles.adviceText}>"{advice}"</p>
                <img src={patternDivider} alt="pattern divider" className={styles.divider} />
                <button className={styles.adviceButton} onClick={getRandomAdvice}>
                    <span className={styles.diceIcon}></span>
                </button>
            </div>
        </div>
    );
};

export default AdviceGenerator;

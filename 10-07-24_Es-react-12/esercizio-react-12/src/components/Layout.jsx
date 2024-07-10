import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Piante, che passione!</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; 2024 Piante, che passione!</p>
            </footer>
        </div>
    );
};

export default Layout;

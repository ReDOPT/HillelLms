import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{ padding: '10px', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <nav>
                <Link to="/">Головна</Link> |
                <Link to="/contacts">Контакти</Link> |
                <Link to="/about">Про мене</Link>
            </nav>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Темна тема' : 'Світла тема'}
            </button>
        </header>
    );
}

export default Header;

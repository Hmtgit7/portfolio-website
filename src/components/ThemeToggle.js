import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { currentTheme, changeTheme, themeNames } = useTheme();

    return (
        <div className="theme-toggle">
            <span className="theme-label">Theme:</span>
            <div className="theme-options">
                {themeNames.map(theme => (
                    <motion.button
                        key={theme}
                        className={`theme-button ${theme} ${currentTheme === theme ? 'active' : ''}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => changeTheme(theme)}
                        aria-label={`Switch to ${theme} theme`}
                    >
                        <span className="theme-icon">
                            {theme === 'light' && '☀️'}
                            {theme === 'dark' && '🌙'}
                            {theme === 'blue' && '🌊'}
                        </span>
                        <span className="theme-name">{theme}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default ThemeToggle;
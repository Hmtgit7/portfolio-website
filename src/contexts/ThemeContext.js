import React, { createContext, useState, useEffect, useContext } from 'react';

// Define theme options
const themes = {
    light: {
        name: 'light',
        colors: {
            primary: '#6366f1', // Indigo
            secondary: '#f97316', // Orange
            background: '#ffffff',
            surface: '#f9fafb',
            text: '#111827',
            textSecondary: '#4b5563',
            border: '#e5e7eb',
            error: '#ef4444',
            success: '#22c55e',
        }
    },
    dark: {
        name: 'dark',
        colors: {
            primary: '#818cf8', // Lighter indigo for dark mode
            secondary: '#fb923c', // Lighter orange for dark mode
            background: '#1f2937',
            surface: '#111827',
            text: '#f9fafb',
            textSecondary: '#d1d5db',
            border: '#374151',
            error: '#f87171',
            success: '#4ade80',
        }
    },
    blue: {
        name: 'blue',
        colors: {
            primary: '#3b82f6', // Blue
            secondary: '#10b981', // Emerald
            background: '#0f172a',
            surface: '#1e293b',
            text: '#f8fafc',
            textSecondary: '#cbd5e1',
            border: '#334155',
            error: '#ef4444',
            success: '#22c55e',
        }
    }
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Get saved theme from localStorage or default to light
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme && themes[savedTheme] ? savedTheme : 'light';
    });

    // Apply theme to document root
    useEffect(() => {
        const theme = themes[currentTheme];
        Object.entries(theme.colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--color-${key}`, value);
        });
        localStorage.setItem('portfolio-theme', currentTheme);
        // Set data-theme attribute for potential CSS selectors
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    // Change theme function
    const changeTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
        }
    };

    // Get available theme names
    const themeNames = Object.keys(themes);

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            changeTheme,
            themeNames,
            theme: themes[currentTheme]
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
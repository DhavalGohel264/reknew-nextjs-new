'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({theme: 'dark',
    toggleTheme: () => {},});

export function ThemeProvider({ children }:{ children: React.ReactNode }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Only run on client
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        if (saved) setTheme(saved);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    // const [theme, setTheme] = useState(() => {
    //     const saved = localStorage.getItem('theme');
    //     console.log('Saved theme:', saved);
    //     return saved || 'dark';
    // });

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     document.documentElement.classList.toggle('dark', theme === 'dark');
    // }, [theme]);

    // const toggleTheme = () => {
    //     setTheme(prev => prev === 'light' ? 'dark' : 'light');
    // };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);

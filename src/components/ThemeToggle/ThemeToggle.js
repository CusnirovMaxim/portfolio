import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDark ? "Включить светлую тему" : "Включить темную тему"}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? <BsMoon /> : <BsSun />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 
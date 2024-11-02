import React, { useState } from 'react';
import '../App.css';

const DarkModeToggle = ({ toggleTheme }) => {
  const [isLight, setIsLight] = useState(false);

  const handleToggle = () => {
    setIsLight(!isLight);
    toggleTheme();
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`slider ${isLight ? 'light' : ''}`}></div>
    </div>
  );
};

export default DarkModeToggle;

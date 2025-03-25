import React, { useState, useEffect } from "react";
import "./CountdownLightSwitch.css";

const CountdownLightSwitch = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  useEffect(() => {
    if (timeElapsed % 30 === 0 && timeElapsed !== 0) {
      setIsLightMode((prevMode) => !prevMode);
    }
  }, [timeElapsed]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimeElapsed(0);
    setIsRunning(false);
  };

  return (
    <div className={`container ${isLightMode ? "light" : "dark"}`}>
      {/* Header with Title and Theme Toggle */}
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" checked={isLightMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <span>{isLightMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>

      {/* Timer and Progress Section */}
      <div className="timer-section">
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ 
              width: `${(timeElapsed % 30) / 30 * 100}%`, 
              backgroundColor: isLightMode ? "#ffcc00" : "#28a745" 
            }}
          ></div>
        </div>
        <div className="timer">{timeElapsed}s</div>
        <div className="btn-group">
          <button 
            onClick={startTimer} 
            disabled={isRunning} 
            style={{ backgroundColor: isLightMode ? "#ffcc00" : "#28a745", color: "#fff" }}
          >
            Start Timer
          </button>
          <button 
            onClick={resetTimer} 
            style={{ 
              display: timeElapsed > 0 ? "inline-block" : "none", 
              backgroundColor: isLightMode ? "#ffcc00" : "#28a745", 
              color: "#fff" 
            }}
          >
            Reset Timer
          </button>
        </div>
        <div className="message">{timeElapsed % 30 === 0 && timeElapsed !== 0 ? "Time's up! Theme switched." : ""}</div>
      </div>
    </div>
  );
};

export default CountdownLightSwitch;

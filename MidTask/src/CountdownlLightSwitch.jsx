import React, { useState } from "react";
import "./CountdownLightSwitch.css";

const CountdownLightSwitch = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${isLightMode ? "light" : ""}`}>
      {/* Header with Title and Theme Toggle */}
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={isLightMode} 
              onChange={toggleTheme} 
            />
            <span className="slider"></span>
          </label>
          <span>{isLightMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>

      {/* Timer and Progress Section */}
      <div className="timer-section">
        <div className="progress-bar">
          <div className="progress" id="progress"></div>
        </div>
        <div className="timer" id="timerDisplay">30s</div>
        <div className="btn-group">
          <button id="startButton" disabled>Start Timer</button>
          <button id="resetButton" disabled style={{ display: "none" }}>
            Reset Timer
          </button>
        </div>
        <div className="message" id="messageArea"></div>
      </div>
    </div>
  );
};

export default CountdownLightSwitch;

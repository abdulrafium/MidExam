import React, { useState, useEffect } from "react";
import "./CountdownLightSwitch.css";

const CountdownLightSwitch = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsLightMode((prevMode) => !prevMode);
      setIsRunning(false);
    }
  }, [isRunning, timeLeft]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setTimeLeft(30);
    setIsRunning(false);
  };

  return (
    <div className={`container ${isLightMode ? "light" : ""}`}>
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
          <div className="progress" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
        </div>
        <div className="timer">{timeLeft}s</div>
        <div className="btn-group">
          <button onClick={startTimer} disabled={isRunning}>Start Timer</button>
          <button onClick={resetTimer} style={{ display: timeLeft < 30 ? "inline-block" : "none" }}>Reset Timer</button>
        </div>
        <div className="message">{timeLeft === 0 ? "Time's up! Theme switched." : ""}</div>
      </div>
    </div>
  );
};

export default CountdownLightSwitch;

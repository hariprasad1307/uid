import React, { useState } from "react";
import "./Calculator.css"; // Importing the enhanced CSS file for Spotify theme

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Custom function to safely evaluate the expression
  const calculateResult = (expression) => {
    try {
      // Create a new Function to safely evaluate the expression
      const safeResult = new Function("return " + expression)();
      return safeResult;
    } catch (error) {
      return "Error";
    }
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      setResult(calculateResult(input));
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator spotify-theme">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"].map((button) => (
          <button key={button} className={button === "=" ? "equals" : ""} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

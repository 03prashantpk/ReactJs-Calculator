import React, { useState } from "react";
import Buttons from "./Buttons";

const ResultScreen = () => {
  const [inputValue, setInputValue] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
    setInputValue("0");
  };

  const handleButtonPress = (value) => {
    if (value === "clear") {
      setInputValue("0");
        
    } else if (value === "=") {
      try {
        const result = calculateResult(inputValue);
        setInputValue(result);
      } catch (e) {
        setInputValue("Invalid Expression");
      }
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      setInputValue((prevValue) => String(prevValue) + String(value));
    } else {
      if (inputValue === "0" && value !== ".") {
        setInputValue(value);
      } else {
        setInputValue((prevValue) => String(prevValue) + String(value));
      }
    }
  };

  const calculateResult = (input) => {
    let result = 0;
    let operator = "+";
    let numStr = "";

    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (/\d/.test(char) || char === ".") {
        numStr += char;
      } else if (/\+|-|\*|\//.test(char)) {
        result = operate(operator, result, parseFloat(numStr));
        operator = char;
        numStr = "";
      }
    }

    result = operate(operator, result, parseFloat(numStr));
    return result.toString();
  };

  const operate = (operator, num1, num2) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  };

  return (
    <>
      <p>{isOn ? "Power On" : "Power Off"}</p>
      <input
        type="text"
        value={inputValue}
        disabled={!isOn}
        onChange={handleInputChange}
      />
      <input
        type="submit"
        value={isOn ? "Off" : "On"}
        style={{ backgroundColor: isOn ? "#C63100" : "#49AF41" }}
        onClick={handleToggle}
      />
      <Buttons handleButtonPress={handleButtonPress} isOn={isOn} />
    </>
  );
};

export default ResultScreen;

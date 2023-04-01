import React, { useState } from "react";
import Buttons from "./Buttons";
import History from "./History";
import { calculateResult } from "./logics";

const ResultScreen = () => {
  const [inputValue, setInputValue] = useState("0");
  const [isOn, setIsOn] = useState(false);
  const [history, setHistory] = useState([]);

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
        setHistory((prevHistory) => [
          ...prevHistory,
          `${inputValue} = ${result}`,
        ]);
      } catch (e) {
        setInputValue("Invalid Expression");
      }
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      setInputValue((prevValue) => `${prevValue}${value}`);
    } else {
      if (inputValue === "0" && value !== ".") {
        setInputValue(value);
      } else {
        setInputValue((prevValue) => `${prevValue}${value}`);
      }
    }
  };

  const handleEntryClick = (entry) => {
    const index = entry.lastIndexOf("=");
    const modifiedEntry = entry.substring(0, index).trim();
    setInputValue(modifiedEntry);
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
      <History
        entries={history}
        isOn={isOn}
        handleEntryClick={handleEntryClick}
      />
    </>
  );
};

export default ResultScreen;

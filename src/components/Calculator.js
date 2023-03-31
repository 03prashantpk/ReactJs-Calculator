import React from "react";
import ResultScreen from "./ResultsScreen";

const CalculatorLayout = (props) => {
  return (
    <div className="calculator">
      <div className="user-input">
        <ResultScreen/>
      </div>
    </div>
  );
}

export default CalculatorLayout;

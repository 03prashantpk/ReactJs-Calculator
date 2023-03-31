import React from "react";
import ResultScreen from "./ResultsScreen";
import Social from "./Social";

const CalculatorLayout = () => {
  return (
    <div className="calculator">
      <ResultScreen />
      <div className="Credit">
        <h3 onMouseOver={Social}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            title="Visit our GitHub page"
          />
        </h3>
      </div>
    </div>
  );
};

export default CalculatorLayout;

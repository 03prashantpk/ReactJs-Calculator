import './App.css';
import './custom.css';

import React from "react";
import CalculatorLayout from './components/Calculator';

function App() {
  return (
    <div className="App">
      <div className='calculator-outer'>
        <div className='calculator-inner'>
          <h3>React Calculator</h3>
            <CalculatorLayout></CalculatorLayout>
          </div>
      </div>
    </div>
  );
}

export default App;

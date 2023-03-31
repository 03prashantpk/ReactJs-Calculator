import React from 'react';

const Buttons = ({handleButtonPress, isOn}) => {

  return (
    <div className='buttons'>
      <div className='numbers-key'>
        <button className='button' onClick={() => handleButtonPress(7)} disabled={isOn ? false : true}>7</button>
        <button className='button' onClick={() => handleButtonPress(8)} disabled={isOn ? false : true}>8</button>
        <button className='button' onClick={() => handleButtonPress(9)} disabled={isOn ? false : true}>9</button>
        <button className='button' onClick={() => handleButtonPress(4)} disabled={isOn ? false : true}>4</button>
        <button className='button' onClick={() => handleButtonPress(5)} disabled={isOn ? false : true}>5</button>
        <button className='button' onClick={() => handleButtonPress(6)} disabled={isOn ? false : true}>6</button>
        <button className='button' onClick={() => handleButtonPress(1)} disabled={isOn ? false : true}>1</button>
        <button className='button' onClick={() => handleButtonPress(2)} disabled={isOn ? false : true}>2</button>
        <button className='button' onClick={() => handleButtonPress(3)} disabled={isOn ? false : true}>3</button>
        <button className='button' onClick={() => handleButtonPress(0)} disabled={isOn ? false : true}>0</button>
        <button className='button' onClick={() => handleButtonPress('.')} disabled={isOn ? false : true}>.</button>
        <button className='button sum' onClick={() => handleButtonPress('=')} disabled={isOn ? false : true}>=</button>
        
      </div>
      <div className='calculation-buttons'>
        <button className='button' onClick={() => handleButtonPress('clear')} disabled={isOn ? false : true}>Clear</button>
        <button className='button' onClick={() => handleButtonPress('+')} disabled={isOn ? false : true}>+</button>
        <button className='button' onClick={() => handleButtonPress('-')} disabled={isOn ? false : true}>-</button>
        <button className='button' onClick={() => handleButtonPress('*')} disabled={isOn ? false : true}>*</button>
        <button className='button' onClick={() => handleButtonPress('/')} disabled={isOn ? false : true}>/</button>
      </div>
    </div>
  );
};

export default Buttons;

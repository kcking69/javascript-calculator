import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForOperand) {
      setDisplayValue(String(number));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(
        displayValue === '0' ? String(number) : displayValue + number
      );
    }
  };

  const handleOperatorClick = (nextOperator) => {
    if (waitingForOperand) {
      if (nextOperator === '-') {
        setDisplayValue('-');
        setWaitingForOperand(false);
      } else {
        setOperator(nextOperator);
      }
      return;
    }

    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = performCalculation(previousValue, inputValue, operator);
      setDisplayValue(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEqualsClick = () => {
    if (operator) {
      const inputValue = parseFloat(displayValue);
      const result = performCalculation(previousValue, inputValue, operator);
      setDisplayValue(String(result));
      setPreviousValue(result);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const performCalculation = (prevValue, nextValue, operator) => {
    switch (operator) {
      case '+':
        return prevValue + nextValue;
      case '-':
        return prevValue - nextValue;
      case '*':
        return prevValue * nextValue;
      case '/':
        return prevValue / nextValue;
      default:
        return nextValue;
    }
  };

  return (
    <div className='calculator'>
      <div id='display'>{displayValue}</div>
      <div id='clear' onClick={handleClearClick}>
        AC
      </div>
      <div id='divide' onClick={() => handleOperatorClick('/')}>
        /
      </div>
      <div id='multiply' onClick={() => handleOperatorClick('*')}>
        *
      </div>
      <div id='seven' onClick={() => handleNumberClick(7)}>
        7
      </div>
      <div id='eight' onClick={() => handleNumberClick(8)}>
        8
      </div>
      <div id='nine' onClick={() => handleNumberClick(9)}>
        9
      </div>
      <div id='subtract' onClick={() => handleOperatorClick('-')}>
        -
      </div>
      <div id='four' onClick={() => handleNumberClick(4)}>
        4
      </div>
      <div id='five' onClick={() => handleNumberClick(5)}>
        5
      </div>
      <div id='six' onClick={() => handleNumberClick(6)}>
        6
      </div>
      <div id='add' onClick={() => handleOperatorClick('+')}>
        +
      </div>
      <div id='one' onClick={() => handleNumberClick(1)}>
        1
      </div>
      <div id='two' onClick={() => handleNumberClick(2)}>
        2
      </div>
      <div id='three' onClick={() => handleNumberClick(3)}>
        3
      </div>
      <div id='equals' onClick={handleEqualsClick}>
        =
      </div>
      <div id='zero' onClick={() => handleNumberClick(0)}>
        0
      </div>
      <div id='decimal' onClick={handleDecimalClick}>
        .
      </div>
    </div>
  );
}

export default Calculator;

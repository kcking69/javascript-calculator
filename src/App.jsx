/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const buttonData = [
    { name: 'AC', id: 'clear' },
    { name: '/', id: 'divide' },
    { name: 'x', id: 'multiply' },
    { name: '7', id: 'seven' },
    { name: '8', id: 'eight' },
    { name: '9', id: 'nine' },
    { name: '-', id: 'subtract' },
    { name: '4', id: 'four' },
    { name: '5', id: 'five' },
    { name: '6', id: 'six' },
    { name: '+', id: 'add' },
    { name: '1', id: 'one' },
    { name: '2', id: 'two' },
    { name: '3', id: 'three' },
    { name: '=', id: 'equals' },
    { name: '0', id: 'zero' },
    { name: '.', id: 'decimal' },
  ];

  const [displayNumber, setDisplayNumber] = useState(['0']);

  const handleButton = (e) => {
    if (e.target.id === 'equals') {
      setDisplayNumber(eval(displayNumber));
    } else if (e.target.id === 'clear') {
      setDisplayNumber((prevNumber) => (prevNumber = '0'));
    } else {
      setDisplayNumber((prevNumber) =>
        [...prevNumber, e.target.innerText].join('')
      );
    }
  };
  return (
    <>
      <div className='calculator'>
        <div className='display'>
          <input value={displayNumber} />
        </div>
        <div className='buttons'>
          {buttonData.map((b) => (
            <Button
              handleButton={handleButton}
              key={b.id}
              name={b.name}
              id={b.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

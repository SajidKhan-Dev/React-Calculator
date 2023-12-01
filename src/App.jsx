
import  { useState } from 'react';
import '../src/App.css'
const App = () => {
  const [display, setDisplay] = useState('');

  const addToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <>

<div className='main_div'>
      <h2>Simple Calculator</h2>
      <input type="text" value={display} disabled /><br />

      <button onClick={() => addToDisplay('1')}>1</button>
      <button onClick={() => addToDisplay('2')}>2</button>
      <button onClick={() => addToDisplay('3')}>3</button>
      <button onClick={() => addToDisplay('/')}>/</button><br />

      <button onClick={() => addToDisplay('4')}>4</button>
      <button onClick={() => addToDisplay('5')}>5</button>
      <button onClick={() => addToDisplay('6')}>6</button>
      <button onClick={() => addToDisplay('-')}>-</button><br />

      <button onClick={() => addToDisplay('7')}>7</button>
      <button onClick={() => addToDisplay('8')}>8</button>
      <button onClick={() => addToDisplay('9')}>9</button>
      <button onClick={() => addToDisplay('+')}>+</button><br />

      <button onClick={() => addToDisplay('0')}>0</button>
      <button onClick={() => addToDisplay('.')}>.</button>
      <button onClick={calculate}>=</button>
      <button style={{ backgroundColor: 'red', color: 'white' }} onClick={clearDisplay}>C</button><br />
    </div>
    
    </>
  )
}

export default App

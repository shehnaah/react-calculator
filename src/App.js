import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (

    <div className='main'>
      <h1 className='title'>Calculator</h1>
      <div class="calculator card mt-5">

  <input type="text" class="calculator-screen "value={value} disabled />

  <div class="calculator-keys">

    <button type="button" class="operator btn btn-info" value="+" onClick={e => setValue(value + e.target.value)}>+</button>
    <button type="button" class="operator btn btn-info" value="-" onClick={e => setValue(value + e.target.value)}>-</button>
    <button type="button" class="operator btn btn-info" value="*" onClick={e => setValue(value + e.target.value)}>&times;</button>
    <button type="button" class="operator btn btn-info" value="/" onClick={e => setValue(value + e.target.value)}>&divide;</button>

    <button type="button" value="7" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>7</button>
    <button type="button" value="8" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>8</button>
    <button type="button" value="9" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>9</button>


    <button type="button" value="4" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>4</button>
    <button type="button" value="5" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>5</button>
    <button type="button" value="6" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>6</button>


    <button type="button" value="1" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>1</button>
    <button type="button" value="2" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>2</button>
    <button type="button" value="3" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>3</button>


    <button type="button" value="0" class="btn btn-light waves-effect number" onClick={e => setValue(value + e.target.value)}>0</button>
    <button type="button" class="decimal function btn btn-secondary" value="." onClick={e => setValue(value + e.target.value)}>.</button>
    <button type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={e => setValue('')}>AC</button>

    <button type="button" class="equal-sign operator btn btn-default" value="=" onClick={e => setValue(eval(value))}>=</button>

  </div>
</div>
    </div>
  );
}

export default App;
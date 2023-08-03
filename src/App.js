import { useState } from 'react';
import './style.css';

function App() {
    const [count, setCount]=useState(0);
    const [a, setA]=useState();
    const [b, setB]=useState();
    const [sign, setSign]=useState("+");
    const [result, setResult]=useState(" ");
    function handleAdd(){
        setResult(a+b);
        setCount(count+1);
    }
    function handleReset(){
        setA(" ");
        setB(" ");
        setSign("+");
    }
  return (
    <div className="main">
      <p>hiiii thereeeee</p>
      <p>Total operations: {count}</p>
      <div className='sub'>
            <input 
                className='num'
                type='text'
                placeholder='number 1...'
                value={a}
                />
            <div className='sign'>{sign}</div>
            <input 
                className='num'
                type='text'
                placeholder='number 1...'
                value={b}
                />
      </div>
      <div className='ops'>
        <button onClick={handleAdd}>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
      <p>Result: {result}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './style.css';

function App() {
    const [count, setCount]=useState(0);
    const [a, setA]=useState();
    const [b, setB]=useState();
    const [sign, setSign]=useState("+");
    const [result, setResult]=useState(" ");

    function handleChangeA(e){
        setA(e.target.value);
    }
    function handleChangeB(e){
        setB(e.target.value);
    }
    function handleAdd(){
        setSign('+');
        setCount(count+1);
        setResult(Number(a)+Number(b));
    }
    function handleSubtract(){
        setSign('-');
        setCount(count+1);
        setResult(Number(a)-Number(b));
    }
    function handleMultiply(){
        setSign('*');
        setCount(count+1);
        setResult(Number(a)*Number(b));
    }
    function handleDivide(){
        setSign('/');
        setCount(count+1);
        setResult(Number(a)/Number(b));
    }

    function handleReset(){
        setA(" ");
        setB(" ");
        setSign("+");
        setResult(" ");
    }

    return (
        <div className="main">
            <p className='heading1'>noob-react-calc</p>
            <p className='heading2'>Total Operations: {count}</p>
            <div className='sub'>
                    <input 
                        className='num'
                        type='number'
                        placeholder='number 1...'
                        value={a}
                        onChange={handleChangeA}
                    />
                    <div className='ops-sign'>{sign}</div>
                    <input 
                        className='num'
                        type='number'
                        placeholder='number 2...'
                        value={b}
                        onChange={handleChangeB}
                    />
            </div>
            <div className='ops'>
                <button className='signbtn' onClick={handleAdd}>+</button>
                <button className='signbtn' onClick={handleSubtract}>-</button>
                <button className='signbtn' onClick={handleMultiply}>*</button>
                <button className='signbtn' onClick={handleDivide}>/</button>
            </div>
            <p className='result'>Result: {result}</p>
            <button className='resetbtn' onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;

import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { decrement, increment, incrementByAmount, reset} from './features/counter/counterSlice';
import { useState } from 'react';
//Action -> Event + Additional info
//Reducer -> Function that takes the current state and an action and returns a new state
//Slice -> It include the reducer and action creators for a specific feature of application
//Store -> A single source of truth to store the state of the application
//State -> The data that represents the current condition of the application. I
function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state)=> state.counter?.value ?? 0);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }


  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick} >+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br /><br />
        <button onClick={handleResetClick}>Reset</button>
        <br /><br />
        <input 
        type="Number" 
        value={amount}
        placeholder='Enter amount'
        onChange = {(e)=> setAmount(e.target.value)}
        />
        <button onClick={handleIncAmountClick}>Increment By Amount</button>
      </div>
    </>
  )
}

export default App

import  {useState} from 'react';
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <p id='para'>You clicked {count} times</p>
      <button id='btn' onClick={()=>{setCount(count+1)}}>Click Me</button>
      <p>{count}</p>
    </div>
  )
}

export default Counter

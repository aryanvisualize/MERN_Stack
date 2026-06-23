
import './App.css'
import {useState} from 'react';
// import Card from './Components/Card'
import Button from './Components/Button'
function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count+1);
  }
  return (
    
    <div>
      <Button handleClick = {handleClick}
      text = "Click me">
        <h1>{count}</h1>
      </Button>
      {/*
        <Card name='aryan'>
          <h1>System Designer</h1>
          <p>Being Consistent everyday for progress</p>
          <p>Will Become SDE1 soon</p>
        </Card>
        <Card>
          Hello There
        </Card>
        // Both are working fine because of props.children
      */}
    </div>
  )
}

export default App

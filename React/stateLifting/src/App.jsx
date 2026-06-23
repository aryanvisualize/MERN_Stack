import './App.css'
import {useState} from 'react'
import Card from './components/Card'
function App() {
  //Create State
  //Manage State
  //Change State
  //Sync state with all the children
  const [name, setName] = useState('');
  return (
    <div>
        <Card title='Card1' name={name} setName={setName}/>
        <Card title='Card2' name={name} setName={setName}/>
        {/* <p>I am inside Parent Component and Value of name is {name}</p> */}
    </div>
  )
}

export default App

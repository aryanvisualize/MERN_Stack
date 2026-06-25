
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
// import ChildC from './components/ChildC';
//Step1: Create context
  const UserContext = createContext();
//Step2: Wrap all the child inside provider / Provide context
//Step3: Pass value
//Step4: Consume context

//Step1: Create context
const ThemeContext = createContext();

function App() {
  const [user] = useState({name:'Aryan'});
  const [theme,setTheme] = useState('light');
  return (
    <>
      <UserContext.Provider value={user}>
        {/* Step2: Creating a provider */}
        <ThemeContext.Provider value={{theme, setTheme}}>
          <div id="container" style={{backgroundColor: theme === 'light' ? "beige" : 'black', 
            color: theme === 'light' ? "black" : 'white'}}>
              <ChildA/>
          </div>
        
        </ThemeContext.Provider>
      </UserContext.Provider>
      
    </>
  )
}

export default App
export {UserContext}
export {ThemeContext}
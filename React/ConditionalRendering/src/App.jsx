import {useState} from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';
function App() {
  const [isLoggedIn] = useState(false);   
    
    
    //Early return
    if(!isLoggedIn){
      return(
        <div>
          <div>{<LoginBtn/>}</div>
        </div>
      )
    }

    // //Logical opr
    return (
      <div>
        <h1>Welcome to my react application page</h1>
        <div>{isLoggedIn && <LogoutBtn/>}</div>
      </div>
    )


    // //ternary operator
    // return (
    //   <div>
    //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    //   </div>
    // )


    // //if-else
    // if(isLoggedIn){
    //   return(
    //     <LogoutBtn/>
    //   )
    // }
    // else{
    //   return(
    //     <LoginBtn/>
    //   )
    // }
}

export default App

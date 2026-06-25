// import React from 'react'
import { useContext } from "react"
import { UserContext } from "../App"
import { ThemeContext } from "../App"


const ChildC = () => {
    const user = useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light');
        }
    }   
    return (
        <div>
            <button onClick={handleClick}>
                Change Theme
            </button>
            <br />
            <p>
                {user.name}: This is called providing context from parent and consuming it in child using useContext hook.
                <br /> This is the best way to pass data from parent to child without props drilling.
            </p>
            
        </div>
    )
}

export default ChildC

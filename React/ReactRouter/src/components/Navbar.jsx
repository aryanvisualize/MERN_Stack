// import React from 'react'

// import About from "./About"
// import Dashboard from "./Dashboard"
// import Home from "./Home"
import { NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                {/* <NavLink/> is used over link to provide an active class */}
                <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=> isActive ? "active-link" : ""}>About</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive})=> isActive ? "active-link" : ""}>Dashboard</NavLink>
            </li>
            {/* We dont use anchor tags in react router dom v6. We use Link tag instead.
            Because anhor tage defies the single page application concept.
            It reloads the page and we lose the state of our application.
            So we use Link tag instead of anchor tag. */}
            {/* <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li> */}
        </ul>
    </div>
  )
}

export default Navbar

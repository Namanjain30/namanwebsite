import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from "../component/Nav"
import "../App.css"

const Header = () => {
  return (
    <>
    <div className='header'>
    <NavLink className="firsta" to="/">
        <img className='jodimage' src='./images/second.jpg' alt='images'/>
    </NavLink>
    <Nav/>
    </div>
    </>
  )
}


export default Header

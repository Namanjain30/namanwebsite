import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { CgClose, CgMenu} from 'react-icons/cg';
import { NavLink } from 'react-router-dom'
import "../App.css"
import { Cartmain } from '../AppContext/Cartcontext';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const [select,setselect] = useState(false)
  const {cart,total_item} = Cartmain()
  const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  return (
    <div className={select ? "active innerheader" : "innerheader"}>
      <ul className="ulheader">
        <li> <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} onClick={()=> setselect(false)}> Home </NavLink> </li>
        <li> <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} onClick={()=> setselect(false)}> About </NavLink> </li>
        <li> <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} onClick={()=> setselect(false)}> Contact </NavLink> </li>
        <li> <NavLink to="/product" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} onClick={()=> setselect(false)}> Product </NavLink> </li>
        {isAuthenticated?(<li><button className='bttn1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li>):(<li><button className='bttn1' onClick={() => loginWithRedirect()}>Log In</button></li>)}
        <li className='shoppingcart ' onClick={()=> setselect(false)}> <NavLink to="/card" > <FiShoppingCart /> </NavLink> <span>{cart.length}</span> </li>
      </ul>
      <div className={select ? "active twobutton" : "twobutton"}>
        <CgMenu name='menu-outline' onClick={()=> setselect(true)} className='open'/>
        <CgClose name='close-outline' onClick={()=> setselect(false)}  className='close'/>
      </div>
    </div>
  )
}

export default Nav
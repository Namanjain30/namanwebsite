import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
const Errorpage = () => {
  return (
    <div className='errorpage'>
        <h2 className='errorfir'>404</h2>
        <h2 className='errorsec'>UH OH! YOU'RE LOST.</h2>
        <p>
            The page you are looking for does not exist. 
            How you got here us a mystery.
            But you can click the button below to go back to Home page
        </p>
        <NavLink to="/">
          <button className="bttn1">Go Back</button>
        </NavLink>
    </div>
  )
}

export default Errorpage
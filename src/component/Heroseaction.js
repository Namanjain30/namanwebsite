import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
const Heroseaction = (props) => {
  return (
    <>
      <div className="container">
        <div className="contant">
          <h1>Naman {props.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            recusandae enim libero voluptas. Sequi ipsum, totam laborum illum
            harum accusamus alias perferendis atque libero sint dicta facere
            numquam quam quibusdam!
          </p>
          <NavLink to="/product">
          <button className="bttn1">Shop now</button>
          </NavLink>
          
        </div>
        <div className="photo">
          <img src="./images/family.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Heroseaction
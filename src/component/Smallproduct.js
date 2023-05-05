import React from 'react'
import { NavLink } from 'react-router-dom'
import Formatprice from './Formatprice'

const Smallproduct = (curelem) => {
    const {id,name,image,price,category} = curelem
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
            <div className="imagesmall">
                <img src={image} alt="" />
                <div className="category" id='jod'>{category}</div>
            </div>
            <div className="contentsmall">
                <div className="name">{name}</div>
                <div className="price"><Formatprice price={price}/></div>
            </div>
        </div>
    </NavLink>
  )
}

export default Smallproduct
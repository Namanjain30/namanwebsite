import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import Cartamount from './Cartamount'
import { NavLink } from 'react-router-dom'
import { Cartmain } from '../AppContext/Cartcontext'

const Addtocard = ({product}) => {
    
    const {id,colors,stock} = product
    const [color,setcolor] = useState(colors[0])
    const [additem,setadditem] = useState(1)
    const {addtocart} = Cartmain()
    const decreament =()=>{
        additem<=1? setadditem(1):setadditem(additem-1)
    }
    const increament = ()=>{
        stock>additem? setadditem(additem+1):setadditem(stock)
    }
    
  return (
    <div className='colorparty'>
        <div className="colorsflaour">
        colors:
        {colors.map((elem,index)=>{
            return(
                <button onClick={()=> setcolor(colors[index])} className={color === elem? " opa colorpartyfirst" : "colorpartyfirst"} key={index} style={{backgroundColor: elem}} >
                    {color === elem? <FaCheck className='facheck'/>:null}
            </button>
            )
        })}
        </div>
        <div className="toogle">
            <Cartamount amount={additem} decreament={decreament} increament={increament}/>
        </div>
        <NavLink to="/card"  onClick={()=>addtocart(id,color,additem,product)}>
            <button className="bttn1">
                Go to card
            </button>
        </NavLink>
    </div>
  )
}

export default Addtocard
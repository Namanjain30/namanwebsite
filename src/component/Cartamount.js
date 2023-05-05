import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Cartamount = ({amount, decreament, increament}) => {

  return (
    <div className="bartamount">
        <button onClick={()=> decreament()}><FaMinus/></button>
        {amount}
        <button onClick={()=> increament()}><FaPlus/></button>
    </div>
  )
}

export default Cartamount
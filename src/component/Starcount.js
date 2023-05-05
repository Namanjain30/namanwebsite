import React from 'react'
import {FaStar} from "react-icons/fa"
import {FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"

const Starcount = ({star,reviews}) => {
    const mainstar = Array.from({length:5},(elem,index)=>{
        let number = index+0.5
        return(
            <span key={index}>
                {star>=index+1 ? (
                    <FaStar className="staricon"/>
                ): star>= number ?(
                    <FaStarHalfAlt className="staricon"/>
                ):(
                    <AiOutlineStar className="staricon"/>
                )}
            </span>
        )
    })
  return (
        <div className="stars">
            {mainstar}
            <span>({reviews} customer reviews)</span>
        </div>
  )
}

export default Starcount
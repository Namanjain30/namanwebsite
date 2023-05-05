import React from 'react'
import Smallproduct from './Smallproduct'

const Gridview = ({product}) => {
  return (
    <div className="section">
        <div className="containerforgrid">
            {
                product.map((elem,index)=>{
                    return <Smallproduct key={index} {...elem}/>
                })
            }
        </div>
    </div>
  )
}

export default Gridview
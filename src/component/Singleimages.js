import React from 'react'
import { useState } from 'react'

const Singleimages = ({image = [{url:""}]}) => {
    const [initial,setinitial] = useState(0)
  return (
    <>
    <div className='showimage'>
        {image.map((img,index)=>{
            return(
            <img src={img.url}  onClick={()=> setinitial(index)} key = {index} width={138}/>
            )
        })}
    </div>
    <div className="imageshow">
        <img src={image[initial].url} alt="" />
    </div>
    </>
  )
}

export default Singleimages
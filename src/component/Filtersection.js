import React, { useState } from 'react'
import { Managerproduct } from '../AppContext/Fullproductcontext'
import { FaCheck } from 'react-icons/fa'
import Formatprice from './Formatprice'
import '../App.css'

const Filtersection = () => {
  const {filter:{text,category,colored,maxvalue,minvalue,price},underrated,allproduct,clearall,click} = Managerproduct()
  
  const getvalues = (allproduct,product)=>{
    let load = allproduct.map((curr)=>{
      return curr[product]
    })
    if(product === 'colors'){
      load = load.flat()
    }
    return(load = ["all",...new Set(load)])
  }


  const correctvalue = getvalues(allproduct,"category")
  const companyvalue = getvalues(allproduct,"company")
  const colorvalue = getvalues(allproduct,"colors")
  const [color,setcolor] = useState('all')
  return (
    <>
    <div className="form">
      <form action="" onSubmit={(e)=> e.preventDefault()}>
        <input type="text" value={text} name='text' onChange={underrated} />
      </form>
    </div>
    <div className="contentfiltersection">
      <h5>category</h5>
      {
        correctvalue.map((elem,index)=>{
          return(
            <button className={elem==='all'?'borderbottom':'none'}  key={index} name='category' value={elem} onClick={underrated}>
            {elem}
          </button>
          )
          
        })
      }
    </div>
    <div className="company">
      <h5>company</h5>
      <select name="company" id="" onClick={underrated}>
      {
        companyvalue.map((elem,index)=>{
          return(
            <option key={index} name='company' value={elem} >
            {elem}
          </option>
          )
        })
      }
      </select>
    </div>
    <div className="colorapart">

    <div className="colorsflaour">
        <h5>colors</h5>
        {colorvalue.map((elem,index)=>{
          if(elem === 'all'){
            return(
              <button onClick={underrated} value='all' name='colored'   key={index} >
                  All
          </button>
          )
          }
            return(
                <button onClick={underrated} value={elem} name='colored'  className={colored === elem? " opa colorpartyfirst" : "colorpartyfirst"} key={index} style={{backgroundColor: elem}} >
                    {colored === elem? <FaCheck className='facheck'/>:null}
            </button>
            )
        })}
        </div>
    </div>
    <div className="filterprice">
      <h5>Range</h5>
      <Formatprice price={price}/>
      <input type="range" max={maxvalue} name='price' min={minvalue} onChange={underrated} value={price} />
    </div>

    <div className="clearsbutton">
      <button className="bttn1" onClick={clearall}>clear button</button>
    </div>
    </>
  )
}

export default Filtersection
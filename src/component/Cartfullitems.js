import React, { useState } from 'react'
import Formatprice from './Formatprice'
import Cartamount from './Cartamount'
import { FaTrash } from 'react-icons/fa'
import { Cartmain } from '../AppContext/Cartcontext'


const Cartfullitems = ({id,name,image,color,price,additem,max}) => {
    const {removeitem,increament,decreament} = Cartmain()
    // const [amount,setadditem] = useState(additem)
    // const decreament =()=>{
    //     amount<=1? setadditem(1):setadditem(amount-1)
    // }
    // const increament = ()=>{
    //     max>amount? setadditem(amount+1):setadditem(max)
    // }
  return (
    <>
    <div className="cartsheading">
        <div className="cartimage">
            <div className="normalimage">
            <img src={image} width={20}  height={20} alt={id} />
            </div>
            <div className="contentnormal">
                <p>{name}</p>
                <div className="colordiv">
                    <p>color:</p>
                    <div className="colorstyle" style={{backgroundColor:color}}>

                    </div>
                </div>
            </div>

        </div>
        <div className="carthide">
            <p>
                <Formatprice price={price}/>

            </p>
        </div>
        <div className="carttitle">
        <Cartamount amount={additem} decreament={()=>decreament(id)} increament={()=>increament(id)}/>
        </div>
        <div className="carthidden">
            <p>
                <Formatprice price={price*additem}/>
            </p>
        </div>
        <div className="remove">
            <FaTrash onClick={()=>removeitem(id)}/>
        </div>
    </div>
    
    
    </>
  )
}

export default Cartfullitems
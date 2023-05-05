import { createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../reducers/Cartreducer";

const Cartcontex = createContext()

const getlocalcartdata = ()=>{
    let newcartdata = localStorage.getItem("namancart")
    if(newcartdata === []){
        return []
    }
    else{
        return (JSON.parse(newcartdata))
    }
}

const initialstate = {
    cart:getlocalcartdata(),
    total_item:"",
    total_amount:"",
    shipping_amount:5000
}




const Cartprovider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialstate)

    const addtocart = (id,color,additem,product)=>{
        return dispatch({type:"firsttoadd",payload:{id,color,additem,product}})
    }

    const removeitem = (id)=>{
        return dispatch({type:"removetheitem",payload:id})
    }

    const clearallcart = ()=>{
        return dispatch({type:"clearthecart"})
    }

    const decreament = (id)=>{
        dispatch ({type:"decrementmain",payload:id})
    }
    const increament = (id)=>{
        dispatch ({type:"increamentmain",payload:id})
    }

    useEffect(()=>{
        dispatch({type:"flexible"})
        dispatch({type:"carttotalamount"})
        localStorage.setItem("namancart",JSON.stringify(state.cart))
    },[state.cart])

    return <Cartcontex.Provider value={{...state,addtocart,removeitem,clearallcart,increament,decreament}}>{children}</Cartcontex.Provider>
}



const Cartmain = ()=>{
    return useContext(Cartcontex)
}

export {Cartmain,Cartprovider}
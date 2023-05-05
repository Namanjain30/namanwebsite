
import { createContext, useContext, useEffect, useReducer } from "react";
import { AppunderContext } from "./ProductContext";
import reducer  from "../reducers/Fullproductreducer";

const Manageproduct = createContext()

const Fullproductcontext = ({children})=>{
    
const initialstate = {
    filterproduct : [],
    allproduct:[],
    sortingorder:"lowest",
    filter:{
        text:'',
        category:"all",
        company:"all",
        colored:"all",
        price:0,
        maxvalue:0,
        minvalue:0
},
    gridview : true
}
const {products} = AppunderContext()
const [state,dispatch] = useReducer(reducer,initialstate)

const Setgrid = ()=>{
    return dispatch({type:"Setgridview"})
}
const Setlist = ()=>{
    return dispatch({type:"Setlistview"})
}
const sorting = (event)=>{
    return dispatch({type:"dosorting",payload:event.target.value})
}

const underrated = (event)=>{
    let value = event.target.value
    let name = event.target.name
    return dispatch({type:"setunderrated",payload:{name,value}})
}

const clearall = ()=>{
    return dispatch({type:"clearallat"})
}


useEffect(()=>{
    
    dispatch({type:"filterproduct"})
    dispatch({type:"takingproduct"})
    
},[products, state.sortingorder,state.filter])

useEffect(()=>{
    dispatch({type:"non_of_busnisses",payload:products})
},[products])



return <Manageproduct.Provider value={{...state,Setgrid,Setlist,sorting,underrated,clearall}}>
    {children}
</Manageproduct.Provider>
}

const Managerproduct = ()=>{
    return useContext(Manageproduct)
}


export  {Fullproductcontext, Managerproduct}
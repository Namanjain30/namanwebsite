import { createContext,useContext,useEffect,useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/Productreducer'

const AppContext = createContext()
const url = 'https://api.pujakaitem.com/api/products'
const initialstate = {
    isloading: false,
    iserror: false,
    products: [],
    featureproduct:[],
    issingleloading:false,
    singleproduct:{}
}

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialstate)

    const getproduct = async (url)=>{
        dispatch({type:"MY_API_LOADING"})
        try{
         const res = await axios.get(url)
        const product = await res.data
        dispatch({type:"MY_API_DATA", payload : product})
        
        }
        catch(error){
            dispatch({type:"MY_API_ERROR"})
        }
        
    }

    const Singleproduct = async (url)=>{
        dispatch({type:"single_API_LOADING"})
        try{
         const res = await axios.get(url)
        const singleproduct = await res.data
        dispatch({type:"single_API_DATA", payload : singleproduct})
        
        }
        catch(error){
            dispatch({type:"single_API_ERROR"})
        }
        
    }
    

    
    useEffect(() => {
    getproduct(url)
    }, [])


    return <AppContext.Provider value={{...state , Singleproduct}}>
        {children}
    </AppContext.Provider>
}
const AppunderContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,AppunderContext}
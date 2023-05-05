const Productreducer = (state,action)=>{
    switch(action.type){
        case "MY_API_LOADING":
            return{
                ...state,
                isloading:true
            }

        case "MY_API_DATA":
            const featureddata = action.payload.filter((curr)=>{
                return curr.featured === true
            })
            return{
                ...state,
                isloading:false,
                iserror: false,
                products: action.payload,
                featureproduct:featureddata
            }
        case "MY_fullAPI_DATA":
            const featureddatas = action.payload
            return{
                ...state,
                isloading:false,
                iserror: false,
                products: action.payload,
                fullproducts:featureddatas
            }
    
        case "MY_API_ERROR":
            return{
                ...state,
                isloading:false,
                iserror: true
            }

        case "single_API_LOADING":
            return{
                    ...state,
                    issingleloading:true
            }
    
         case "single_API_DATA":

            return{
                    ...state,
                    issingleloading:false,
                    iserror: false,
                    singleproduct: action.payload
            }
        
        case "single_API_ERROR":
            return{
                    ...state,
                    issingleloading:false,
                    iserror: true
            }

        default:
            return state
    }

};

export default Productreducer
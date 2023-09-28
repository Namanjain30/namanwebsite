const Cartreducer = (state,action)=>{
    switch(action.type){
        
        case "firsttoadd":
            const {id,color,additem,product} = action.payload

            const gettheadd = state.cart.find((curr)=> curr.id === id+color)

            if(gettheadd){
                let updatedated = state.cart.map((curr) => {
                    if(curr.id === id+color){
                        let newamount = curr.additem + additem
                        if(newamount>= curr.max){
                            newamount = curr.max
                        }
                        return{
                            ...curr,
                            additem:newamount
                        }
                    }
                    else{
                        return curr
                    }
                })
                return{
                    ...state,
                    cart:updatedated
                }
            }
            else{
                let cartproduct
            cartproduct ={
                id:id+color,
                name:product.name,
                color,
                additem,
                image:product.image[0].url,
                price:product.price,
                max:product.stock

            }
            return{
                ...state,
                cart:[...state.cart,cartproduct]
            }

            }

            case "decrementmain":
                let main = state.cart.map((curr)=>{
                    if(curr.id === action.payload){
                        let decreamount = curr.additem -1
                        if(decreamount <=1 ){
                            decreamount = 1
                        }
                        return {
                            ...curr,
                            additem:decreamount
                        }
                    }
                    else{
                        return curr
                    }
                })
                return{
                    ...state,
                    cart:main
                }

                case "increamentmain":
                
                    let main2 = state.cart.map((curr)=>{
                        if(curr.id === action.payload){
                            let decreamount = curr.additem +1
                            if(decreamount >= curr.max ){
                                decreamount = curr.max
                            }
                            return {
                                ...curr,
                                additem:decreamount
                            }
                        }
                        else{
                            return curr
                        }
                    })
                    return{
                        ...state,
                        cart:main2
                    }   

            case "removetheitem":
                let update = state.cart.filter((curr)=> curr.id !== action.payload)
                return{
                    ...state,
                    cart:update

                }

            case "clearthecart":
                return{
                    ...state,
                    cart:[]
                }

            case "flexible":
                let updateitemcal = state.cart.reduce((initial,curr)=>{
                    let {additem} = curr
                    initial = initial+additem
                    return initial
                },0)
                return{
                    ...state,
                    total_item:updateitemcal
                }

            case "carttotalamount":
                let total_price = state.cart.reduce((initial,curr)=>{
                    let {price,additem} = curr
                    initial = initial+price*additem
                    return initial
                },0)
                return{
                    ...state,
                    total_amount: total_price
                }

        default:
            return state
    }
}

export default Cartreducer
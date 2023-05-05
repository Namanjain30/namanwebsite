

const Fullproductreducer = (state,action) => {
    
    switch(action.type){
        case "non_of_busnisses":
            let pricearr = action.payload.map((curr)=> curr.price)
            const maxvalue = Math.max(...pricearr)
            return {
                ...state,
                filterproduct:[...action.payload],
                allproduct:[...action.payload],
                filter:{...state.filter,maxvalue:maxvalue,price:maxvalue}
            }

        case "clearallat":
            return{
                ...state,
                filter:{
                    ...state.filter,
                    text:'',
        category:"all",
        company:"all",
        colored:"all",
        price:state.filter.maxvalue,
        maxvalue:state.filter.maxvalue,
        minvalue:0
                }
            }

        case "Setgridview":
            return{
                ...state,
                gridview:true
            }
        case "Setlistview":
            return{
                ...state,
                gridview:false

            }

        case "dosorting":
            
            let userdefinned = document.getElementById('sort')
            let answer = userdefinned.options[userdefinned.selectedIndex].value
            
            return{
                ...state,
                sortingorder:answer
            }

        case "takingproduct":
            let newsort
            let {filterproduct} = state;
            let tempdortanswer = [...filterproduct]

            if(state.sortingorder === "a-z"){
                newsort = tempdortanswer.sort((a,b)=> a.name.localeCompare(b.name))
            }
            if(state.sortingorder === "z-a"){
                newsort = tempdortanswer.sort((a,b)=> b.name.localeCompare(a.name))
            }
            if(state.sortingorder === "lowest"){
                newsort = tempdortanswer.sort((a,b)=>a.price-b.price)
            }
            if(state.sortingorder === "highest"){
                newsort = tempdortanswer.sort((a,b)=>b.price-a.price)
            }

            return{
                ...state,
                filterproduct:newsort,
            }

        case "setunderrated":
            const {name,value} = action.payload
            return{
                ...state,
                filter:{
                    ...state.filter,
                    [name] : value
                }
            }

        case "filterproduct":
            let {allproduct} = state
            let tempary = [...allproduct]
            const {text,category,company,colored,price} = state.filter
            if(text){
                tempary = tempary.filter((curr)=>{
                    return curr.name.toLowerCase().includes(text)
                })
            }

            if(category !== 'all'){
                // if(category === 'all'){
                //     console.log(tempary,category)
                //     tempary = tempary.filter((curr)=>{
                //         return curr.category !== category
                //     })
                    
                
                tempary = tempary.filter((curr)=> curr.category === category)
            }

            if(company !== 'all'){
                tempary = tempary.filter((curr)=> curr.company.toLowerCase() === company.toLowerCase())
            }

            if(colored !== 'all'){
                tempary = tempary.filter((curr)=> curr.colors.includes(colored))
            }

            if(price){
                tempary = tempary.filter((curr)=> curr.price <= price)
            }
            
            return{
                ...state,
                filterproduct:tempary
            }
            

        default:
            return{
                ...state,
            }

    }
}

export default Fullproductreducer

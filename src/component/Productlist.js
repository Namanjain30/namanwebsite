import React from 'react'
import Smallproduct from './Smallproduct'
import { Managerproduct } from '../AppContext/Fullproductcontext'
import Gridview from './Gridview'
import Listview from './Listview'

const Productlist = () => {
    const {filterproduct,gridview} = Managerproduct()
    // console.log(filterproduct);
    if(gridview === true){
        return(
            <Gridview product={filterproduct}/>
        ) 
    }
    if(gridview === false){
        return (<Listview product={filterproduct}/> )
    }
}

export default Productlist
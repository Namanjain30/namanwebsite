import React from 'react'
import {BsFillGridFill,BsList} from "react-icons/bs"
import { Managerproduct } from '../AppContext/Fullproductcontext'

const Sort = () => {
  const {gridview,Setgrid,Setlist,sorting,filterproduct} = Managerproduct()
  return (
    <>
    <div className="mastersort">
      <div className="sorticons">
        <button  className={gridview ? ' fire sorticonmini' : 'sorticonmini'} onClick={Setgrid}>
          <BsFillGridFill  />
        </button>
        <button  className={gridview ? 'sorticonmini' : 'fire sorticonmini'} onClick={Setlist}>
          <BsList  />
        </button>
      </div>
      <div className="sortamount">
        Total {filterproduct.length} items found
      </div>
      <div className="sortingpart">
        <select name="applysorting" id="sort" onClick={sorting}>
          <option value="highest">Price(highest)</option>
          <option value="lowest">Price(lowest)</option>
          <option value="a-z">alphabatic</option>
          <option value="z-a">reverse</option>
        </select>
      </div>
    </div>
    </>
  )
}

export default Sort
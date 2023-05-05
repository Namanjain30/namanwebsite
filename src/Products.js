import React from "react";
import { Managerproduct } from "./AppContext/Fullproductcontext";
import Filtersection from "./component/Filtersection";
import Sort from "./component/Sort";
import Productlist from "./component/Productlist";

const Products = () =>{

  return (
    <>
    <div className="mastercontainerproduct">
      <div className="containerfullproduct">
        <div className="filtercontent">
          <Filtersection/>
        </div>
        <div className="productview">
          <div className="sortfilter">
            <Sort/>
          </div>
          <div className="mainproduct">
            <Productlist/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Products;

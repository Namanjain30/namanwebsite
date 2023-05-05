import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppunderContext } from "./AppContext/ProductContext";
import Singleimages from "./component/Singleimages";
import Formatprice from "./component/Formatprice";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Starcount from "./component/Starcount";
import Addtocard from "./component/Addtocard";

const api = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { Singleproduct, issingleloading, singleproduct } = AppunderContext();
  const { id } = useParams();

  useEffect(() => {
    Singleproduct(`${api}?id=${id}`);
  }, []);

  const {
    id: namid,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleproduct;
  return (
    <>
      <div className="singleproductcontainer">
        <div className="singleimages">
          <Singleimages image={image} />
        </div>
        <div className="contentsingleproduct">
          <div className="namesingle">{name}</div>
          <div className="stars"><Starcount star={stars} reviews={reviews}/></div>
          <div className="longprice">
            {" "}
            MRP : <span className="line"><Formatprice price={price + 250000} /></span>
          </div>
          <div className="price">Deal of the Day : <Formatprice price={price} /></div>
          <div className="desciption">{description}</div>
          <div className="deliverypart">
            <div className="singledelivery">
              <TbTruckDelivery className="singleicon" />
              <p className="para">Free Delivery</p>
            </div>
            <div className="singlecontact2">
              <MdSecurity className="singleicon" />
              <p className="para">Non-Contact Shipping</p>
            </div>
            <div className="singlebank">
              <GiReceiveMoney className="singleicon" />
              <p className="para">Money-Back Garanteed</p>
            </div>

            <div className="singlesecure">
              <RiSecurePaymentLine className="singleicon" />
              <p className="para">Super Secure Payment System</p>
            </div>
            
          </div>
          <hr />
            <div className="questions">
              <div className="available">Available: <span className="spanjod">in stock</span> </div>
              <div className="idd" >ID: <span className="spanjod"> {namid}</span></div>
              <div className="brandd">Brand: <span className="spanjod"> {company}</span></div>
            </div>
            <hr/>
        <div className="color">
          {stock>0?<Addtocard product={singleproduct}/>:"out of stock"}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Singleproduct;
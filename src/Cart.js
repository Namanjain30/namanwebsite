import React from 'react'
import { Cartmain } from './AppContext/Cartcontext'
import Cartfullitems from './component/Cartfullitems'
import { NavLink } from 'react-router-dom'
import Formatprice from './component/Formatprice'
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
    const {cart,clearallcart,total_amount,shipping_amount} = Cartmain()
    const { user,isAuthenticated } = useAuth0();

    if(cart.length === 0){
      return (
        <div className="last">
          NO ITEM IN CART
        </div>
      )
    }
  return (
    <>
    <div className="cartcontainer">
      {
        isAuthenticated && (
          <div className="profile">
            <img src={user.profile} alt="" />
            <h2>{user.name}</h2>
          </div>
        )
      }
        <div className="cartheading">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
        </div>
        <hr />
        <div className="contentcart">
          {
            cart.map((curr,index)=>{
              return <Cartfullitems key={index} {...curr} />
            })
          }
        </div>
        <hr />
        <div className="buttonscart">
          <div className="clearbutton">
            <NavLink to="/product">
            <button className='bttn1'>continue shopping</button>
            </NavLink>
            <button className='bttn1' onClick={()=>clearallcart()}>clear cart</button>
          </div>
        </div>
    </div>
    <div className="ordertotalamount">
      <div className="subdata">
        <div>
          <p>subtotal</p>
          <p><Formatprice price={total_amount}/></p>
        </div>
        <div>
          <p>shipping_amount</p>
          <p>
            <Formatprice price={shipping_amount}/>
          </p>
        </div>
        <hr />
        <div>
          <p>order total</p>
          <p>
            <Formatprice price={shipping_amount+total_amount}/>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart
import React from 'react'
import {TbTruckDelivery} from "react-icons/tb"
import {MdSecurity} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"
import "../App.css"

const Services = () => {
  return (
    <>
    <div className="services">
        <div className="delivery">
            <TbTruckDelivery className='icon'/>
            <h3>super fast and free delivery</h3>
        </div>
        <div className="money">
            <div className="contact2">
                <MdSecurity className="icon"/>
                <h3>Non-Contact Shipping</h3>
            </div>
            <div className="bank">
                <GiReceiveMoney className="icon"/>
                <h3>Money-Back Garanteed</h3>
            </div>
        </div>
        <div className="secure">
            <RiSecurePaymentLine className="icon"/>
            <h3>Super Secure Payment System</h3>
        </div>
    </div>
    </>
  )
}

export default Services
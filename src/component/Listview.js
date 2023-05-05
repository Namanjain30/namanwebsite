import React from 'react'
import Formatprice from './Formatprice'
import { NavLink } from 'react-router-dom'

const Listview = ({product}) => {
    console.log(product)
  return (
    <>
    <div className="masterlistview">
        <div className="productlistview">
            {
                product.map((elem)=>{
                    const {id,name,image,price,category,description} = elem
                    return(
                        <div className="fullcontentlistview">
                        <div className="imageslistview">
                        <img src={image} alt={name} />
                    </div>
                    <div className="contentlistview">
                        <h3>{name}</h3>
                        <p>
                            <Formatprice price={price}/>
                        </p>
                        <p className='lol'>{description.slice(0,90)}...</p>
                        <NavLink to={`/singleproduct/${id}`}>
                            <button className="bttn1">
                                Read More
                            </button>
                        </NavLink>
                    </div>
                    </div>
                    )
                    
                })
            }
        </div>
    </div>
    </>
  )
}

export default Listview
import { AppunderContext } from "../AppContext/ProductContext"; 
import Smallproduct from "./Smallproduct";
import "../App.css"

const Featuredproduct = ()=>{
    const {isloading,featureproduct} = AppunderContext()
    if(isloading){
        <div>....loading</div>
    }
    return(
    <>
    <div className="master">
    <div className="containerfeature">
        <div className="intro">Check Now</div>
        <div className="commonheading">Our Feature Services</div>
        <div className="featureproduct">
            {
                featureproduct.map((elem,index)=>{
                    return <Smallproduct key={index} {...elem}/>
                })
            }
        </div>
    </div>
    </div>
    </>
    )
}

export default Featuredproduct
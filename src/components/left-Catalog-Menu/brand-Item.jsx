import React from 'react';
import ModelItem from './model-item';
import { Link } from 'react-router-dom';
import arrow from "./arrow.svg";
import { observer } from "mobx-react-lite"

export const BrandItem = observer(({item}) => {    	
const [isActive, setIsActive] = React.useState(false);

/*let loc = window.location.search*/
/*React.useEffect( () =>{
  let loc = window.location.search
  if (loc === "?acum"){
    console.log("11")
    setIsActive(true)
  }}, [isActive] 
)*/

//console.log(brand)
// console.log(content)
  return (
    <React.Fragment>  
    <div className="left-menu">
        {/*onClick={() => setIsActive((prev) => !prev) } */}
        <Link to={item.url} onClick={() => setIsActive((prev) => !prev) }>{item.title} <img src={arrow} alt=""></img></Link>
        {isActive && item.brand.map((brand, index) => (
            <div key={index} className="brand-item">
              <div >{isActive ? '-' : '+'}</div>
              <ModelItem key={"2"+index} brand={brand}/>
            </div>
        ))}           
    </div>
    </React.Fragment>
  );
});
 
//export default BrandItem;
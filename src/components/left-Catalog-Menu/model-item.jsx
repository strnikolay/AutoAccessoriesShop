import React from 'react';
import arrow from "./arrow.svg"
import { Link } from 'react-router-dom';
 
function ModelItem ({brand}) {
    	//console.log(window.location.search)
  const [isActive, setIsActive] = React.useState(false);

 
  return (
    <React.Fragment>
    <div className="model-item">
        <Link to={brand.url} onClick={() => setIsActive((prev) => !prev) }>{brand.brandtitle} <img src={arrow} alt=""></img></Link>
        {isActive&&brand.model.map((model, index) => (
          <div key={index} className="model">
              <div>{model.title}</div>
          </div>


        ))}           
    </div>
    </React.Fragment>
  );
};
 
export default ModelItem;
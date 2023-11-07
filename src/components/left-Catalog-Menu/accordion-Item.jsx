import React from 'react';
import SubAccordion from './sub-accordion';
import { Link } from 'react-router-dom';
 
function AccordionItem ({title, url, brand}) {
    	
const [isActive, setIsActive] = React.useState(false);
//console.log(brand)
// console.log(content)
  return (
    <React.Fragment>
    <div className="accordion">
        <Link to={url} >{title}</Link>
        {brand.map((brand, index) => (
         
               <div key={index} className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div >{brand.brandtitle}</div>
                    <div >{isActive ? '-' : '+'}</div>
                </div >
                <SubAccordion key={"2"+index} model={brand.model} className="accordion-content" />
            </div>
           
        ))}           
    </div>
    </React.Fragment>
  );
};
 
export default AccordionItem;
import React from 'react';
import AccordionItem from './accordion-Item';
 
function SubAccordion ({model}) {
    	

 
  return (
    <React.Fragment>
    <div className="accordion">
        {model.map((model, index) => (
            
            
            <div key={index} className="accordion-item">
                <div className="accordion-title">
                    <div>{model.title}</div>
                    <div>{model.content}</div>
                </div>
            </div>


        ))}           
    </div>
    </React.Fragment>
  );
};
 
export default SubAccordion;
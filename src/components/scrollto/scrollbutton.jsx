import React, {useEffect, useState} from 'react';  
import "./scrollbutton.css"

    
const ScrollButton = () =>{  
    
  /* Доделать
  const [visible, setVisible] = useState(true)  
  useEffect(()=>{
    const toggleVisible = () => {  
        const scrolled = document.documentElement.scrollTop;  
        if (scrolled > 0){  
          console.log(scrolled)  
          setVisible(false)  
        }   
        else if (scrolled <= 0){  
          setVisible(true)  
        }  
      }; 
     
      window.addEventListener('scroll', toggleVisible); 
  })
  style={{display: visible ? 'inline' : 'none'}}
  */
 
 
    
  const scrollToBottom = () =>{  
    window.scrollTo({  
      top: document.documentElement.scrollHeight,  
      behavior: 'smooth'
    });  
  };  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

    
  return (  
    <div className='buttonwrapper'>
        <button className='up' onClick={scrollToTop} />
        <button className='down' onClick={scrollToBottom} />  
    </div>

  );  
}  
    
export default ScrollButton;
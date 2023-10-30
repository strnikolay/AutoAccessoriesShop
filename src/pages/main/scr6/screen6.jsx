import "./screen6.css"
import { useState, useEffect} from "react"
import part1 from "./img/part1.png"
import part2 from "./img/part2.png"
import part3 from "./img/part3.png"
import part4 from "./img/part4.png"
import part5 from "./img/part5.png"
import part6 from "./img/part6.png"
import Carousel from './carousel';


function MainSixScreen () {
  
  /*const images = [
    <img key={part1} scr={part1} />,
    <img key={part2} scr={part2} />,
    <img key={part3} scr={part3} />
  ]*/

  /*const images = [
    "part1",
    "part2",
    "part3",
    "part4",
    "part5"
  ]*/

  /*useEffect(() => {
    outImg.innerHTML =`<img src=${images[Img]}>`
  })*/





return(
  
  <div className="screen6">

      <Carousel>
        <img src={part1} />
        <img src={part2} />
        <img src={part3} />
        <img src={part4} />
        <img src={part5} />
        <img src={part6} />
      </Carousel>

    {/*<div className="wrapper">
        <div className="slider">
            <div className="container">

                    <button className="prev" onClick={handlePrev}/>
                    <div className="slider_img">
                        {images.map((Img, index)=>
                             <div key={index} className={Img} />
                        )}
                    </div>
                    <button className="next" onClick={handleNext}/>
                    


            </div>
        </div>
                        </div>*/}
    
  </div>

)}



export default MainSixScreen;   

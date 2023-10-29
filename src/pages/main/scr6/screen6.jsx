import "./screen6.css"
import { useState, useEffect} from "react"
import part1 from "./img/part1.png"
import part2 from "./img/part2.png"
import part3 from "./img/part3.png"
import part4 from "./img/part4.png"
import part5 from "./img/part5.png"
import part6 from "./img/part6.png"

function MainSixScreen () {
  const [Img, setImg] = useState (0) 


  //const outImg = document.querySelector('.slider__img')

  
  const images = [
    <img key={part1} scr={part1} />,
    <img key={part2} scr={part2} />,
    <img key={part3} scr={part3} />
  ]

  /*useEffect(() => {
    outImg.innerHTML =`<img src=${images[Img]}>`
  })*/

 
  
  const NextHandler = () =>{
      if(Img < images.length - 1){
          setImg(Img++)
      }else{
          setImg(0)
      }
      //outImg.innerHTML =`<img src=${images[Img]}>`
  }
  
  const PrevHandler = () =>{
      if(Img > 0 ){
        setImg(Img--)
      }else{
          setImg(images.length-1) 
      }
      //outImg.innerHTML =`<img src=${images[Img]}>`
  }



return(
  
  <div className="screen6">

    <div className="wrapper">
        <div className="slider">
            <div className="container">
                <div className="slider__block">
                    <div className="slider__img">
                        {images[Img]}
                    </div>
                    <div className="slider__btn">
                        <button className="prev" onClick={PrevHandler}/>
                        <button className="next" onClick={NextHandler}/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
  </div>

)}

export default MainSixScreen;   

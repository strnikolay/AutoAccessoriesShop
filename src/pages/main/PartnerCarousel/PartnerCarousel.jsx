import "./PartnerCarousel.css"
import part1 from "./img/part1.png"
import part2 from "./img/part2.png"
import part3 from "./img/part3.png"
import part4 from "./img/part4.png"
import part5 from "./img/part5.png"
import part6 from "./img/part6.png"
import Carousel from './carousel';


function PartnerCarousel () {

return(
  
  <div className="partnercarousel">
      <div className="title">Наши партнеры</div>
      <Carousel>
        <img src={part1} />
        <img src={part2} />
        <img src={part3} />
        <img src={part4} />
        <img src={part5} />
        <img src={part6} />
      </Carousel>
   
  </div>

)}



export default PartnerCarousel;   

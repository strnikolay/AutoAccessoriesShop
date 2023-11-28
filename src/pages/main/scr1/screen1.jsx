import React from "react";
import "./screen1.css"
import Button from "../../../components/button/button";
import Blok2  from "./blok";

function MainFirstScreen () {
  const [i, setI] = React.useState(0)



  const text = [
    "надежные, качественные аккумуляторы",
    "профессиональная помощь вашему автомобилю",
    "команда высококласных специалистов",
    "заботливый сервис и своевренная информация"
  ]

  const el = document.querySelectorAll(".rect");
  
  React.useEffect(() => {
    const timer = setTimeout(()=>{
      console.log(el)
      i<3 ? setI(i+1) : setI(0);
      if (el.length > 0) {el.forEach((el) => el.style = "background-color: #fffff;")
      el[i].style = "background-color: #C53720;"}
    }, 2000)
    return () => clearTimeout(timer)

  }, [i])

  

return(
  
<div className="screen-1">
  <div className={"screen-1-bg background"+i}>
  <div className="content-wraper">

      <div className="title">
        <h1>{text[i].toUpperCase()}</h1>
      </div>
      <Button text="ПЕРЕЙТИ В КАТАЛОГ"/>
      <div className="rect-wrapper">
        <div className="rect"/>
        <div className="rect"/>
        <div className="rect"/>
        <div className="rect"/>
      </div>
    </div>

</div>
  <Blok2/>
</div>
)}

export default MainFirstScreen;

 
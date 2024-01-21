import "./MainServiceScreen.css"
import ico1 from "./img/icon 1.png"
import ico2 from "./img/icon 2.png"
import ico3 from "./img/icon 3.png"
import hover from "./img/hover.png"

function MainThirdScreen () {

return(
  <div className="screen3">
  <div className="screen3-wrapper">

    <div className="title">услуги</div>
    <p className="title-subtext">Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</p>
    
    <div className="content-wrapper">

      <div className="service-wrapper"> 

        <div className="service-item">
          <img className="hover" src={hover}/>
          <img className="icon" src={ico1}/>
          <div className="service-text">
            <div className="service-title">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</div>
            <div className="service-text">Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. </div>
          </div>
        </div>    

        <div className="service-item">
          <img className="hover" src={hover}/>
          <img className="icon" src={ico2}/>
          <div className="service-text">
            <div className="service-title">ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</div>
            <div className="service-text">Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!</div>
          </div>
        </div>


        <div className="service-item">
          <img className="hover" src={hover}/>
          <img className="icon" src={ico3}/>
          <div className="service-text">
            <div className="service-title">БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</div>
            <div className="service-text">Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!</div>
          </div>
        </div>
      </div>  


      <div className="left-img">
        {/*<div className="frame one"></div>*/}
        <div className="frame two" />
        {/*<div className="frame three"></div>*/}
        <div className="rect" />
      </div>

      <div className="button-98s">ЗАДАТЬ ВОПРОС</div>
    </div>
  </div>    
  </div>

)}

export default MainThirdScreen;   

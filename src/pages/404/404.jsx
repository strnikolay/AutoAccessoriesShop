import "./404.css"
import svg404 from "./404.svg"

function MainThirdScreen () {

return(
  <div className="screen-404">
      {/*<div class="item-404-sbD">*/}
    <div class="background">
      <img class="svg404" src={svg404}/>
      <p class="title">
        СТРАНИЦА 
        <br/>
        НЕ НАЙДЕНА
      </p>
      <p class="text">Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.</p>
      <a href="/" class="button">ПЕРЕЙТИ НА ГЛАВНУЮ</a>
    </div>
      {/*</div>*/}
  </div>
)}

export default MainThirdScreen;   

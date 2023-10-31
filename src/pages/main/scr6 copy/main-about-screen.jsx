import "./main-about-screen.css"
import foto from "./foto.png"

function MainAboutScreen () {

return(
  
  <div className="main-about-screen">

    <div class="screen-wrapper">
      <div class="title">о компании</div>
      <div class="content-wrapper">
        <img class="foto" src={foto}/>
        <div class="text">
          <p>
          Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в 
          <br/>
          <br/>
          «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров.
          </p>
          <button>УЗНАТЬ БОЛЬШЕ</button>
        </div>
      </div>
    </div>
  {/*</div>*/}
  </div>

)}

export default MainAboutScreen;   

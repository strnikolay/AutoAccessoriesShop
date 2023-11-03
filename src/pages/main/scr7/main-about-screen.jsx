import "./main-about-screen.css"
import foto from "./foto.png"

function MainAboutScreen () {

return(
  
  <div className="main-about-screen">

    <div className="screen-wrapper">
      <div className="title">о компании</div>
      <div className="content-wrapper">
        <img className="foto" src={foto}/>
        <div className="text">
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

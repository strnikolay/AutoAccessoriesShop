import "./footer.css"
import logo from "../../images/white_logo_text.svg"

function MainFooter () {

return(

  <footer className="footer">
    <div className="logo-wrapper">
      <img className="logo-NJK" src={logo}/>
      <p className="copyright">
      © 2019 PRO Auto. 
      <br/>
      Все права защищены.
      </p>
    </div>
    <div className="menu-wrapper">
    <div className="auto-group-d6ab-oeX">
      <div className="item--9M1">КОМПАНИЯ</div>
      <p className="item--eoZ">О КОМПАНИИ</p>
      <p className="item--mNP">ЛИЦЕНЗИИ</p>
      <p className="item--Gpw">ПАРТНЕРЫ</p>
      <p className="item--bsD">ОТЗЫВЫ КЛИЕНТОВ</p>
      <p className="item--gtf">РЕКВИЗИТЫ</p>
      <p className="item--1AF">ВАКАНСИИ</p>
    </div>
    <div className="auto-group-p7b5-vo1">
      <div className="item--TH9">КАТАЛОГ</div>
      <p className="item--N9D">АККУМУЛЯТОРЫ</p>
      <p className="item--g9u">АВТОМАСЛА</p>
      <p className="item--oEX">АКСЕССУАРЫ</p>
      <p className="item--j8B">АВТОХИМИЯ</p>
    </div>
    <div className="auto-group-jmfd-FMR">
      <div className="item--n6T">УСЛУГИ</div>
      <p className="item--FVq">ДИАГНОСТИКА АККУМУЛЯТОРА</p>
      <p className="item--jR1">ПРИЕМ АККУМУЛЯТОРОВ</p>
    </div>
    <div className="auto-group-suk9-dWP">
      <div className="item--9jd">ИНФОРМАЦИЯ</div>
      <p className="item--4rb">АКЦИИ</p>
      <p className="item--Pdy">НОВОСТИ</p>
      <p className="item--WyV">СТАТЬИ</p>
      <p className="item--FRH">ВОПРОС - ОТВЕТ</p>
    </div>

    </div>
    <div className="action-wrapper">
    <div className="auto-group-wwyr-mPd">
      <img className="vector-Wc7" src="./assets/vector-mVh.png"/>
      <img className="subtract-4Nj" src="./assets/subtract-q7V.png"/>
    </div>
    <div className="auto-group-zscb-znB">
      <div className="auto-group-jpkd-8dV">
        <p className="item-7-342-279-36-13-g9D">+7 (342) 279-36-13</p>
        <p className="proauto59yandexru-PZR">proauto59@yandex.ru</p>
      </div>
      <div className="button-irb">ЗАКАЗАТЬ ЗВОНОК</div>
    </div>


    </div>

  </footer>


)}

export default MainFooter;    




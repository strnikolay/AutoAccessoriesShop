import "./screen4.css"
import background from "./porsche-normal-1.png"
import border from "./border.png"

function MainFourScreen () {

return(
  
  <div class="screen4">
    <div class="title">
        <div class="title-text">о компании</div>
    </div>
      <div class="content">
        <div class="text-border">
          <p class="content-text">
            Мы рады приветствовать вас на нашем сайте.
            <br/>
            Компания «PROавто» - это надежные, качественные аккумуляторы в широком ассортименте, разнообразные в по форме и характеристикам, а также качественные масла и автохимия именитых брендов.
            <br/>
            Сеть магазинов «PROавто» более 20-и лет занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров. Мы зарекомендовали себя как надежная компания, специалисты которой всегда готовы проконсультировать по любому вопросу: от подбора автощёток, до рекомендаций по подбору аккумулятора для Вашего автомобиля. Мы дорожим своей репутацией и даём гарантию на весь ассортимент продукции, представленной на нашем сайте!
            <br/>
            Убедитесь в этом сами!
          </p>
        </div>
        <div className="button-wrapper">
          <div class="item">
            <div class="ico one"></div>
            {/*<img class="vector-45-6zb" src="./assets/vector-45.png"/>*/}
            <p>Реквизиты</p>
          </div>

          <div class="item">
            <div className="ico two"></div>
            {/*<img class="ico-1-7aF" src="./assets/ico-1.png"/>*/}
            <p class="item--Raw">Задать вопрос</p>
          </div>
        </div>

      </div>
    </div>

    


)}

export default MainFourScreen;   

import "./vert-good-card.css"
import magnum from "./magnum-60ah.png"

function VertGoodCard() {
return(

<div class=" card_wrapper">
  <img class="item_image" src={magnum}/>
  <div class="item_name">MAGNUM 60Ah</div>
  <div class="price_wrapper">
    <div class="old_price">2199 руб.</div>
    <div class="new_price">2900 руб.</div>
  </div>
  <p class="description">Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>

  <div class="action-wrapper">
    <button class="button-increment">-</button>
    <div class="item-count">00</div>
    <button class="button-decrement">+</button>

    <div class="add_to_bin">
      <div class="items-in-bin">3</div>
      <img class="bin-icon" src="./group-2-kBZ.png"/>
    </div>

  </div>


  <button class="button-description">ПОДРОБНЕЕ</button>
</div>

)}

export default VertGoodCard;
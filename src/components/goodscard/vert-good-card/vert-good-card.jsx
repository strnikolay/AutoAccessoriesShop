import "./vert-good-card.css"
import magnum from "./magnum-60ah.png"
import GoodCounter from "../../good-counter/good-counter";

function VertGoodCard() {
return(

<div className=" card_wrapper">
  <img className="item_image" src={magnum}/>
  <div className="item_name">MAGNUM 60Ah</div>
  <div className="price_wrapper">
    <div className="old_price">2199 руб.</div>
    <div className="new_price">2900 руб.</div>
  </div>
  <p className="description">Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>

  <div className="action-wrapper">
    <GoodCounter />

    <div className="add_to_bin">
      <div className="items-in-bin">3</div>
      <img className="bin-icon" src="./group-2-kBZ.png"/>
    </div>

  </div>


  <button className="button-description">ПОДРОБНЕЕ</button>
</div>

)}

export default VertGoodCard;
import React from "react";
import "./blok.css";
import cash from "./img/cash.svg"
import support from "./img/support.svg"
import reward from "./img/reward.svg"
import online from "./img/online.svg"

const Blok2 = () => {
return (
<div className="screen">
    <div className="wrapper">
    <div className="view">
        <img className="ico" src={cash}/>
        <div className="text-wrapper">Наличный и безналичный расчет</div>
    </div>
    <div className="view">
        <img className="ico" src={support} />
        <div className="text-wrapper">Техническая помощь и консультация</div>
    </div>
    <div className="view">
        <img className="ico" src={reward} />
        <p className="text-wrapper">Только качественная и проверенная продукция</p>
    </div>
    <div className="view">
        <img className="ico" src={online} />
        <p className="text-wrapper">Мы всегда на связи с 9:00 до 18:00!</p>
    </div>
    </div>
</div>
);
};
export default Blok2;
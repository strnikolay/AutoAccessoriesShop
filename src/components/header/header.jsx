import "./header.css"


import React from "react";
/*import { Button } from "./Button";
import { Component58 } from "./Component58";
import { DivWrapper } from "./DivWrapper";
import { Icon } from "./Icon";*/
import Logo from "./img/logo.svg"
import Bin from "./img/bin.svg"

export const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <img className="logo" alt="Logo" src={Logo} />
        <nav>
          <a>КОМПАНИЯ</a>
          <a>ИНФОРМАЦИЯ</a>
          <a>УСЛУГИ</a>
          <a>КАТАЛОГ</a>
          <a>КОНТАКТЫ</a>
        </nav>
        <button className="button-lead">ЗАКАЗАТЬ ЗВОНОК</button> 
        <button className="search"  />
        <button className="bin">
          <img src={Bin} ></img>
          <div className="bin-count" />
        </button> 
      </div>
    </header>  
    );
};


 
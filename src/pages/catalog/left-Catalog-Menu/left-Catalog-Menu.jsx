import React from "react";
import "./left-Catalog-Menu.css"
import {BrandItem} from "./brand-Item";
import arrow from "./arrow.svg"
import DB from "../../../db"

function LeftCatalogMenu () {
  //const [isActive, setIsActive] = React.useState("");

  /*React.useEffect( () =>{
    let loc = window.location.search
    if (loc === "?acum"){
      console.log("11")
      let status = "acum"
      setIsActive(status)
    }}, [isActive] 
  )*/

return(
  
  <div className="left-Catalog-Menu-Wrapper">
     
  <div className="sub-menu-VAo">

    <div className="item--ai3">
      <div className="item--6Ab">
        <div className="auto-group-hc5u-1oM">
          <div className="item--KJF">АККУМУЛЯТОРЫ</div>
          <img className="item--nhd" src={arrow} alt=""/>
        </div>
        <div className="rectangle-1-W7q">
        </div>
      </div>
      <div className="item--2rs">
        <div className="magnum-9Ao">
          <div className="item--VkT">
            <div className="magnum-1D1">АКБ MAGNUM</div>
            <img className="item--it7" src="./assets/-PLj.png" alt=""/>
          </div>
          <div className="frame-17-SJK">
            <div className="magnum-60ah-MRH">MAGNUM 60Ah</div>
            <div className="magnum-75ah-tRD">MAGNUM 75Ah</div>
            <div className="magnum-90ah-RR9">MAGNUM 90Ah</div>
            <div className="magnum-132ah-N5V">MAGNUM 132Ah</div>
            <div className="magnum-190ah-735">MAGNUM 190Ah</div>
            <div className="magnum-230ah-rWT">MAGNUM 230Ah</div>
          </div>
        </div>
        <div className="auto-group-ej7q-C4X">
          <div className="item--W5D">
            <div className="item--QgP">АКБ ЗВЕРЬ</div>
            <img className="item--6p7" src="./assets/-3Wo.png" alt=""/>
          </div>
          <div className="item--RLb">
            <div className="item--J9V">ТЮМЕНСКИЙ АККУМУЛЯТОРНЫЙ ЗАВОД</div>
            <img className="item--vgf" src="./assets/-QSs.png" alt=""/>
          </div>
          <div className="akom-3WP">
            <div className="akom-NYf">АКБ AKOM</div>
            <img className="item--JSK" src="./assets/-rfq.png" alt=""/>
          </div>
          <div className="bars-dDh">
            <div className="bars-xFy">АКБ BARS</div>
            <img className="item--67H" src="./assets/-2cf.png" alt=""/>
          </div>
          <div className="item--pZ5">
            <div className="item--ieT">АКБ ТЮМЕНСКИЙ МЕДВЕДЬ</div>
            <img className="item--DLK" src="./assets/-W9m.png" alt=""/>
          </div>
          <div className="enrun-9Dy">
            <div className="enrun-UX9">АКБ ENRUN</div>
            <img className="item--c7Z" src="./assets/-vRD.png" alt=""/>
          </div>
          <div className="unix-westa-K1y">
            <div className="unix-westa-Bps">АКБ UNIX (WESTA)</div>
            <img className="item--uks" src="./assets/-mrP.png" alt=""/>
          </div>
          <div className="edcon-qPd">
            <div className="edcon-xj9">АКБ EDCON</div>
            <img className="item--5Ys" src="./assets/-YF9.png" alt=""/>
          </div>
          <div className="afa-Qb9">
            <div className="afa-ibq">АКБ AFA</div>
            <img className="item--3e7" src="./assets/1.png" alt=""/>
          </div>
          <div className="bosch-aP9">
            <div className="bosch-6sH">АКБ BOSCH</div>
            <img className="item--RPm" src="./assets/-u8j.png" alt=""/>
          </div>
          <div className="mutlu-x8o">
            <div className="mutlu-f3D">АКБ MUTLU</div>
            <img className="item--nNj" src="./assets/-YyM.png" alt=""/>
          </div>
          <div className="item--Jby">
            <div className="item--CxF">ОРИГИНАЛЬНЫЕ АКБ</div>
            <img className="item--ubm" src="./assets/-FnP.png"alt="" />
          </div>
        </div>
        <div className="optima-Ee3">
          <div className="auto-group-nbuz-mdy">
            <div className="optima-J87">ГЕЛИЕВЫЕ АКБ OPTIMA</div>
            <img className="item--1oD" src="./assets/-azB.png" alt=""/>
          </div>
          <div className="rectangle-1-wgs">
          </div>
        </div>
      </div>
    </div>
    <div className="item--t6K">
      <div className="auto-group-eysw-cY7">
        <div className="item--wqH">АВТОМАСЛА</div>
        <img className="item--4f1" src="./assets/-Qcf.png" alt="" />
      </div>
      <div className="rectangle-1-PSP">
      </div>
    </div>
    <div className="item--LMd">
      <div className="auto-group-zuwb-4Hd">
        <div className="item--PKu">АКСЕССУАРЫ</div>
        <img className="item--h5h" src="./assets/-V9Z.png" alt=""/>
      </div>
      <div className="rectangle-1-1s5">
      </div>
    </div>
    <div className="item--ZNo">
      <div className="auto-group-cn7z-HZh">
        <div className="item--RA7">АВТОХИМИЯ</div>
        <img className="item--w8T" src="./assets/-VYB.png" alt=""/>
      </div>
      <div className="rectangle-1-rmD">
      </div>
</div>
</div>



  <div className="catalog-wrapper">
    {DB.map((item, index) => (
      <BrandItem key={index} item={item}/>
    ))}
  </div>
  </div>

)}

export default LeftCatalogMenu;   

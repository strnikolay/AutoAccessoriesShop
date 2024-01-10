
import MainFirstScreen from "./scr1/screen1";
import {Header} from "../../components/header/header"
import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import MainFourScreen from "./scr4_about/about";

import MainFooter from "../../components/footer/footer";
import ScrollButton from "../../components/scrollto/scrollbutton";

import MainAboutScreen from "./MainAboutScreen/main-about-screen";
import VertGoodCard from "../../components/vert-good-card/vert-good-card";
import LeftCatalogMenu from "../../components/left-Catalog-Menu/left-Catalog-Menu";
import PartnerCarousel from "./PartnerCarousel/PartnerCarousel";


function Main () {

return(    
<>
<Header/>
<MainFirstScreen/>

{/*
<LeftCatalogMenu/>*/}
<PartnerCarousel/>
<MainAboutScreen />

<MainSecondScreen/>
<MainThirdScreen/>
<MainFourScreen />

{/*<VertGoodCard />*/}

<MainFooter/>
<ScrollButton/>
</>
)}
 
export default Main; 
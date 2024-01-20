
import {Header} from "../../components/header/header"
import MainFirstScreen from "./scr1/MainFirstScreen";

import MainCatalogScreen from "./scr2/MainCatalogScreen";
import MainServiceScreen from "./scr3/MainServiceScreen";


import MainFooter from "../../components/footer/footer";
import ScrollButton from "../../components/scrollto/scrollbutton";

import MainAboutScreen from "./MainAboutScreen/main-about-screen";
import VertGoodCard from "../../components/vert-good-card/vert-good-card";
import MainPartnerCarousel from "./PartnerCarousel/PartnerCarousel";


function Main () {

return(    
<>
<Header/>
<MainFirstScreen/>
<MainCatalogScreen/>
<MainServiceScreen/>
<MainAboutScreen />
<MainPartnerCarousel/>

{/*<VertGoodCard />*/}

<MainFooter/>
<ScrollButton/>
</>
)}
 
export default Main; 
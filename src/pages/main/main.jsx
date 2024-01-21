
import {Header} from "../../components/header/header"
import MainFirstScreen from "./MainFirstScreen/MainFirstScreen";

import MainCatalogScreen from "./MainCatalogScreen/MainCatalogScreen";
import MainServiceScreen from "./MainServiceScreen/MainServiceScreen";
import MainAboutScreen from "./MainAboutScreen/main-about-screen";
import MainPartnerCarousel from "./PartnerCarousel/PartnerCarousel";
import MainFooter from "../../components/footer/footer";
import ScrollButton from "../../components/scrollto/scrollbutton";

function Main () {

return(    
<>
<Header/>
<MainFirstScreen/>
<MainCatalogScreen/>
<MainServiceScreen/>
<MainAboutScreen />
<MainPartnerCarousel/>
<MainFooter/>
<ScrollButton/>
</>
)}
 
export default Main; 
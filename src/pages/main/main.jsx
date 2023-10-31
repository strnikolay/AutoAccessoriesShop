
import {Header} from "../../components/header/header"
import MainFirstScreen from "./scr1/screen1";
import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import MainFourScreen from "./scr4/screen4";

import MainFooter from "../../components/footer/footer";
import ScrollButton from "../../components/scrollto/scrollbutton";
import MainSixScreen from "./scr6/screen6";


function Main () {

return(    
<>
<Header/>
<MainFirstScreen/>
<MainSecondScreen/>
<MainThirdScreen/>
<MainFourScreen />
<MainSixScreen/>
<MainFooter/>
<ScrollButton/>
</>
)}

export default Main; 
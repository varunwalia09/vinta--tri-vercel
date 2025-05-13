
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import Home from './Components/Home.jsx';
import NavBar from "./Components/NavBar.jsx";
import About from "./Components/About/About.jsx";
import AboutCard from "./Components/About/AboutCard.jsx";
import DayNightToggle from './Components/DayNightToggle.jsx';
 import SmokeTrail from "./Components/SmokeTrail.jsx";
 import LetsTalkCircle from "./Components/LetsTalkCircle/LetsTalkCircle.jsx";
import Services from "./Components/Services/Services.jsx";
 import FooterTrionn from "./Components/Footer/FooterTrionn.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
<DayNightToggle/>
 <SmokeTrail/> 
 <LetsTalkCircle/>

{/* <CardSection/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/services" element={<Services/>}/> 
      </Routes>
     <FooterTrionn/>
      </BrowserRouter>
    </div>
  );
}

export default App;
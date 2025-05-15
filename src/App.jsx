import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';

import Home from './Components/Home.jsx';
import NavBar from "./Components/NavBar.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import AboutCard from "./Components/About/AboutCard.jsx";
import DayNightToggle from './Components/DayNightToggle.jsx';
import SmokeTrail from "./Components/SmokeTrail.jsx";
import LetsTalkCircle from "./Components/LetsTalkCircle/LetsTalkCircle.jsx";
import FooterTrionn from "./Components/Footer/FooterTrionn.jsx";
import Loader from "./Components/loder/Loader.jsx";
import TeamSection from "./Components/TeamSection/TeamSection.jsx";
import WorkSection from "./Components/WorkSection/WorkSection.jsx";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // you can set any time in ms (2000 = 2 sec)

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <DayNightToggle />
        <SmokeTrail />
        <LetsTalkCircle />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teamsection" element={<TeamSection />} />
          <Route path="/worksection" element={<WorkSection/>} />
        </Routes>

        <FooterTrionn />
      </BrowserRouter>
    </div>
  );
}

export default App;

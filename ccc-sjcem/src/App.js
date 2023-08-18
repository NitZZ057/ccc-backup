import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import "./css/style.css";
import "./css/css2.css";
import "./css/about.css";

//Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import EventPage from "./pages/Events";
import Potd from "./pages/Potd";
import HackethonIdeathonReg from "./components/Events/HackethonIdeathonReg";
import VerifyPayPage from "./pages/VerifyPay";
import RegisterHackethon from "./components/Events/RegisterHackethon";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/potd" element={<Potd />} />
        <Route path="/events/register" element={<HackethonIdeathonReg />} />
        <Route path="/events/register/hackethon" element={<RegisterHackethon />} />
        {/* <Route path="/events/register/ideathon" element={<HackethonIdeathonReg />} /> */}
        <Route path="/events/verifyandpayment" element={<VerifyPayPage />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import Responsiveness from "./pages/Responsiveness";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/responsiveness" element={<Responsiveness />} />
      </Routes>
    </>
  );
}

export default App;

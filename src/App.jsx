import "./App.css";

import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import Nav from "./components/Nav";
import { Suspense, lazy } from "react";
import ParentComponent from "./components/ParentComponent";
import ExpensiveCalculationComponent from "./components/ExpensiveCalculationComponent";
import Pagination from "./components/Pagination";
// import Responsiveness from "./pages/Responsiveness";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Responsiveness = lazy(() => import("./pages/Responsiveness"));
const Nav = lazy(() => import("./components/Nav"));

function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<h1>Loading........</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/responsiveness" element={<Responsiveness />} />
        </Routes>
        <ParentComponent />
        <ExpensiveCalculationComponent />
        <Pagination />
      </Suspense>
    </>
  );
}

export default App;

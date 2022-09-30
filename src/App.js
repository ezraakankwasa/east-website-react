import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./components/Nav";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import DiplomaAdv from "./pages/DiplomaAdv";
import DiplomaTax from "./pages/DiplomaTax";
import PolicyCenter from "./pages/PolicyCenter";
import Team from "./pages/Team";
import TeamMember from "./components/TeamMember";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <Aboutus/> } />
        {/* <Route path="store" element={ <Store/> } />
        <Route path="easttv" element={ <Easttv/> } /> */}
        <Route path="about/:id" element={ <Team/>} />
        <Route path="services/diplomatax" element={<DiplomaTax/>} />
        <Route path="services/diplomaadv" element={<DiplomaAdv/>} />
        <Route path="services/policycenter" element={<PolicyCenter/>} />
        {/* <Route path="services/publicfinance" element={PublicFinance} /> */}
        </Routes>
      <Footer/>
    </div>
  );
}

// font-family: 'Playfair Display', serif;
// this is for headings
export default App;

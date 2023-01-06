import { Container } from "@mui/system";
import NavbarHome from "./components/NavbarHome";
import HomePage from "./pages/HomePage";
import VisionMission from "./pages/VisionMission";
import CatalogSlider from "./pages/CatalogSlider";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NavbarMain from "./components/NavbarMain";
import Approach from "./pages/Approach";
import { useEffect } from "react";

const HomeCombined = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='w-full p-0'>
        <HomePage />
        <NavbarMain />
        <VisionMission />
        <Approach />
        <CatalogSlider />
      </div>
    </>
  );
};

function App() {
  return (
    <div
      disableGutters
      style={{ zIndex: "-20", maxWidth: "1920px" }}
      className='flex items-center flex-col'
    >
      <BrowserRouter>
        <NavbarHome />
        <Routes>
          <Route path='/' element={<HomeCombined />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

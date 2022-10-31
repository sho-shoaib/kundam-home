import { Container } from "@mui/system";
import NavbarHome from "./components/NavbarHome";
import HomePage from "./pages/HomePage";
import bgPaper from "./images/paper_bg.png";
import VisionMission from "./pages/VisionMission";
import CatalogSlider from "./pages/CatalogSlider";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const HomeCombined = () => {
  return (
    <>
      <div>
        <HomePage />
        <VisionMission />
        <CatalogSlider />
      </div>
    </>
  );
};

function App() {
  return (
    <Container maxWidth='xl' disableGutters style={{ zIndex: "-20" }}>
      <div className='w-full h-full fixed top-0' style={{ zIndex: "-100" }}>
        <img src={bgPaper} alt='bg-paper' className='w-full h-full' />
      </div>
      <NavbarHome />
      <BrowserRouter>
        <Routes>
          <Route path='/kundam-home/' element={<HomeCombined />} />
          <Route path='/kundam-home/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;

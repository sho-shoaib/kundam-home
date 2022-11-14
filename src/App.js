import { Container } from "@mui/system";
import NavbarHome from "./components/NavbarHome";
import HomePage from "./pages/HomePage";
import bgPaper from "./images/paper_bg.png";
import VisionMission from "./pages/VisionMission";
import CatalogSlider from "./pages/CatalogSlider";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NavbarMain from "./components/NavbarMain";
import Approach from "./pages/Approach";

const HomeCombined = () => {
  return (
    <>
      <div>
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
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;

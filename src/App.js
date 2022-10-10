import { Container } from "@mui/system";
import NavbarHome from "./components/NavbarHome";
import HomePage from "./pages/HomePage";
import bgPaper from "./images/paper_bg.png";
import VisionMission from "./pages/VisionMission";
import CatalogSlider from "./pages/CatalogSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <Container
      maxWidth='xl'
      disableGutters
      style={{ backgroundImage: `url(${bgPaper})` }}
      className='bg-fixed -z-20'
    >
      <NavbarHome />
      <HomePage />
      <VisionMission />
      <CatalogSlider />
      <Footer />
    </Container>
  );
}

export default App;

import { Container } from "@mui/system";
import NavbarHome from "./components/NavbarHome";
import HomePage from "./pages/HomePage";
import bgPaper from "./images/paper_bg.png";
import VisionMission from "./pages/VisionMission";

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
    </Container>
  );
}

export default App;

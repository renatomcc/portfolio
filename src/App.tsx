import { Container } from "./styles/styles";
import "./styles/global.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight"

function App() {
  return (
    <Container>
      <AsideLeft/>
      <AsideRight/>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;

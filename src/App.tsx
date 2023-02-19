import { Container } from "./styles/styles";
import "./styles/global.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <Container>
      <Home />
      <AboutMe />
      <Projects />
    </Container>
  );
}

export default App;

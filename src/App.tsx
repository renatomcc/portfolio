import { Container, Content } from "./styles/styles";
import "./styles/global.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";

function App() {
  const slideAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500, ...config.default },
    delay: 1800,
  });
  return (
    <Container>
      <Navbar />
      <AsideLeft />
      <AsideRight />
      <Content style={slideAnimation}>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </Content>
    </Container>
  );
}

export default App;

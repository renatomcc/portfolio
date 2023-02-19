import React from "react";
import {
  Container,
  Content,
  Title,
  ProjectImage,
  ProjectDescription,
} from "./styles";

function Projects() {
  return (
    <Container>
      <Title>
        <hr />
        <h1>&lt;Projetos/&gt;</h1>
      </Title>
      <Content>
        <ProjectImage>
            <img src="../../../assets/images/pokedex.png" alt="Pokedex" />
        </ProjectImage>
        <ProjectDescription>
            <h3>Pokedex</h3>
            <p>
                Uma Pokedex com todos os pokemons e suas informações, diversos filtros e opção de favoritar seus pokemons predilétios.
            </p>
            <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
                <li>Mantine</li>
                <li>Rest API</li>
            </ul>
        </ProjectDescription>
      </Content>
    </Container>
  );
}

export default Projects;

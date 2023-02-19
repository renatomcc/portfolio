import React from "react";
import { Container, Content, Title } from "./styles";

import Project from "../Project";

function Projects() {
  return (
    <Container>
      <Title>
        <hr />
        <h1>&lt;Projetos/&gt;</h1>
      </Title>
      <Content>
        <Project
          title="Pokédex"
          description="Uma Pokedex com todos os pokemons e suas informações, diversos
        filtros e opção de favoritar seus pokemons predilétos."
          imageSrc="../../../assets/images/pokedex.png"
          imageAlt="Pokedex"
          technologies={[
            "React",
            "TypeScript",
            "Styled Components",
            "Mantine",
            "Rest API",
          ]}
          descPosition="left"
          imgPositionLeft="auto"
          imgPositionRight={0}
          githubLink="https://github.com/renatomcc/pokedexv2"
          websiteLink="https://pokedexv2-renatomcc.netlify.app"
        />
        <Project
          title="League Champions"
          description="Uma aplicação com todos os campeões do game League of Legends com opção de busca por nome, ao clicar no campeão é mostrada suas informações."
          imageSrc="../../../assets/images/league.png"
          imageAlt="League Champions"
          technologies={[
            "React",
            "TypeScript",
            "Next.js",
            "Styled Components",            
            "Mantine",
            "Rest API",
          ]}
          descPosition="right"
          imgPositionLeft={0}
          imgPositionRight="auto"
          githubLink="https://github.com/renatomcc/pokedexv2"
          websiteLink="https://pokedexv2-renatomcc.netlify.app"
        />
      </Content>
    </Container>
  );
}

export default Projects;

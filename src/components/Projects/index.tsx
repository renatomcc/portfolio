import React, { useState } from "react";
import FeaturedProject from "../Featured Project";
import Project from "../Project";
import {
  Container,
  Content,
  Title,
  MoreProjects,
  StyledButton,
  SecondTitle,
} from "./styles";
import { ProjectProps } from "../Project";

function Projects() {
  const featuredProjects = [
    {
      title: "Pokédex",
      description:
        "Uma Pokedex com todos os pokemons e suas informações, diversos filtros e opção de favoritar seus pokemons predilétos.",
      imageSrc: "../../../assets/images/pokedex.png",
      imageAlt: "Pokedex",
      technologies: ["React", "TypeScript", "Styled Components", "Mantine"],
      descPosition: "left",
      imgPositionLeft: "auto",
      imgPositionRight: 0,
      githubLink: "https://github.com/renatomcc/pokedexv2",
      websiteLink: "https://pokedexv2-renatomcc.netlify.app",
    },
    {
      title: "League Champions",
      description:
        "Uma aplicação com todos os campeões do game League of Legends com opção de busca por nome, ao clicar no campeão é mostrada suas informações.",
      imageSrc: "../../../assets/images/league.png",
      imageAlt: "League Champions",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Styled Components",
        "Mantine",
      ],
      descPosition: "right",
      imgPositionLeft: 0,
      imgPositionRight: "auto",
      githubLink: "https://github.com/renatomcc/league-champions",
      websiteLink: "https://league-champions-renatomcc.netlify.app/",
    },
  ];
  const moreProjects = [
    {
      title: "Pokedex v1",
      description:
        "Primeira versão da Pokédex criada no início dos meu estudos com React.",
      technologies: ["React", "Typescript", "Css"],
      githubLink: "https://github.com/renatomcc/pokedex",
      websiteLink: "https://pokedex-renatomcc.netlify.app",
    },
    {
      title: "E-commerce",
      description:
        "Um website de e-commerce com categoria de produtos e carrinho.",
      technologies: ["React", "Typescript", "Redux Toolkit", "Mantine"],
      githubLink: "https://github.com/renatomcc/redux-ecommerce",
      websiteLink: null,
    },
    {
      title: "Around the World",
      description:
        "Bandeira de todos os países com filtro por continente e mais informações ao clique em cada bandeira.",
      technologies: ["React", "Typescript", "Sass"],
      githubLink: "https://github.com/renatomcc/countries",
      websiteLink: "https://countries-renatomcc.netlify.app",
    },
    {
      title: "Teorema de Pitágoras",
      description: "Aplicação fullstack para calcular o teorema a hipotenusa",
      technologies: ["React", "Typescript", "Css", "Python", "Flask"],
      githubLink:
        "https://github.com/renatomcc/pythagorean-theorem-flask-react",
      websiteLink: null,
    },
    {
      title: "Movie list",
      description:
        "Lista de filmes com opção de adicionar, remover e editar filmes e informações salvas em localStorage",
      technologies: ["Html", "Css", "Javascript"],
      githubLink: "https://github.com/renatomcc/movies",
      websiteLink: "https://renatomcc-movies.vercel.app",
    },
    {
      title: "Games",
      description: "Coletânia de jogos",
      technologies: ["Html", "Css", "Javascript"],
      githubLink: "https://github.com/renatomcc/dom-games",
      websiteLink: "https://domgames-renatomcc.netlify.app",
    },
  ];

  const [loadedProjects, setLoadedProjects] = useState<ProjectProps[]>(
    moreProjects.slice(0, 2)
  );

  function handleShowMore() {
    if (loadedProjects.length < 6) {
      setLoadedProjects(moreProjects.slice(0, loadedProjects.length + 2));
    } else {
      setLoadedProjects(moreProjects.slice(0, 2));
    }
  }

  return (
    <Container>
      <Title>
        <hr />
        <h1>&lt;Projetos/&gt;</h1>
      </Title>
      <Content>
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={index} {...project} />
        ))}
      </Content>
      <SecondTitle>Alguns outros projetos</SecondTitle>
      <Content>
        <MoreProjects>
          {loadedProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </MoreProjects>
        <StyledButton onClick={() => handleShowMore()}>
          {loadedProjects.length < 6 ? "Mostrar mais" : "Mostrar menos"}
        </StyledButton>
      </Content>
    </Container>
  );
}

export default Projects;

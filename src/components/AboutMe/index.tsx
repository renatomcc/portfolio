import React from "react";
import {
  Container,
  Content,
  Title,
  ContentText,
  ContentImage,
  SkillsContent,
} from "./styles";

function AboutMe() {
  return (
    <Container  id="About">
      <Title>
        <h1>&lt;Sobre mim/&gt;</h1>
        <hr />
      </Title>
      <Content>
        <ContentText>
          <p>
            Meu interesse por essa área começou aos 12 anos, quando ainda
            descobravando a internet criei meu primeiro blog na plataforma
            gratuíta blogspot, onde eu copiava códigos de tutoriais que
            ensinavam a personalizar sua página. <br />
            Desde então eu nunca perdi o interesse nessa área, e criar coisas
            para a web tem sido minha paixão.
            <br />
          </p>
          <p>
            Aqui estão algumas das tecnologias nas quais me especializei e
            utilizo frequentemente:
          </p>
          <br />
          <SkillsContent>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>React Native</li>
            <li>Angular</li>
            <li>Next</li>
            <li>Node.js</li>
            <li>Git</li>
          </SkillsContent>
        </ContentText>
        <ContentImage>
          <img src="https://pbs.twimg.com/media/E11ZtjtWEAEj7vs?format=jpg&name=small" />
        </ContentImage>
      </Content>
    </Container>
  );
}

export default AboutMe;

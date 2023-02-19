import React from "react";
import { Container, Text, BigText, SmallText, StyledButton } from "./styles";

function Home() {
  return (
    <Container>
      <Text color="#e9e9e9">Olá, meu nome é</Text>
      <BigText color="#734bd1">Renato Castro.</BigText>
      <BigText color="rgba(115, 75, 209, 0.6)">
        Sou um desenvolvedor Web.
      </BigText>
      <SmallText>
        Sou um desenvolvedor voltado para área front-end especializado em
        React.js, apaixonado por tecnologia e que adora descobrir e estudar
        novas tecnologias.
      </SmallText>
      <StyledButton>Entre em contato!</StyledButton>
    </Container>
  );
}

export default Home;

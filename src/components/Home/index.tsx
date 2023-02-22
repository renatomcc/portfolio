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
      <StyledButton>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com"
          target="_blank"
        >
          Entre em contato!
        </a>
      </StyledButton>
    </Container>
  );
}

export default Home;

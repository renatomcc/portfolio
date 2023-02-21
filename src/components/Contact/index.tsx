import React from "react";
import { Container, Title, Content, Links } from "./styles";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container>
      <Title>
        <hr />
        <h1>Links</h1>
        <hr />
      </Title>
      <Content>
        <p>
          Estes são meus links, fique à vontade pra entrar em contato comigo! 😃
        </p>
        <Links>
          <a>
            <TbBrandGithub size={70} />
          </a>
          <a>
            <FaLinkedinIn size={70} />
          </a>
          <a>
            <FiCodepen size={70} />
          </a>
          <a>
            <MdEmail size={70} />
          </a>
        </Links>
      </Content>
    </Container>
  );
};

export default Contact;

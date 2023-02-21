import React from "react";
import { Container, Title, Content, Links } from "./styles";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container id="Contact">
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
          <a href="https://github.com/renatomcc" target="_blank">
            <TbBrandGithub size={70} />
          </a>
          <a href="https://www.linkedin.com/in/renatomcc/" target="_blank">
            <FaLinkedinIn size={70} />
          </a>
          <a
            href="https://codepen.io/renato-castro-the-lessful"
            target="_blank"
          >
            <FiCodepen size={70} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com"
            target="_blank"
          >
            <MdEmail size={70} />
          </a>
        </Links>
      </Content>
    </Container>
  );
};

export default Contact;

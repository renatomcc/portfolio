import React from "react";
import { Container } from "./styles";
import { RiGithubLine } from "react-icons/ri";
import { FaCodepen } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const Aside = () => {
  return (
    <Container>
      <a href="https://github.com/renatomcc" target="_blank">
        <RiGithubLine size={30} />
      </a>
      <a href="https://codepen.io/renato-castro-the-lessful" target="_blank">
        <FaCodepen size={30} />
      </a>
      <a href="https://www.linkedin.com/in/renatomcc/" target="_blank">
        <FiLinkedin size={30} />
      </a>
      <hr />
    </Container>
  );
};

export default Aside;

import React from "react";
import { Container, LinksBar, EmailBar } from "./styles";
import { RiGithubLine } from "react-icons/ri";
import { FaCodepen } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const Aside = () => {
  return (
    <Container>
      <a>
        <RiGithubLine size={30} />
      </a>
      <a>
        <FaCodepen size={30} />
      </a>
      <a>
        <FiLinkedin size={30} />
      </a>
      <hr />
    </Container>
  );
};

export default Aside;

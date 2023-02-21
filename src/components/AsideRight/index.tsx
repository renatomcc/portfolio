import React from "react";
import { Container } from "./styles";
import { RiGithubLine } from "react-icons/ri";
import { FaCodepen } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const Aside = () => {
  return (
    <Container>
      <a 
      href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com"
      target="_blank"
      >
        <span>renattocasttro@gmail.com</span>
      </a>
      <hr />
    </Container>
  );
};

export default Aside;

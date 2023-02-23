import React from "react";
import { Container } from "./styles";
import { RiGithubLine } from "react-icons/ri";
import { FaCodepen } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useSpring, config } from "react-spring";

const Aside = () => {
  const slideAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    from: { opacity: 0, transform: "translateY(100%)" },
    config: { duration: 500, ...config.default },
    delay: 1300,
  });
  return (
    <Container style={slideAnimation}>
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

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  NavbarLogo,
  NavbarLinks,
  StyledLink,
  Hamburger,
  Menu,
  Content
} from "./styles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MySVG from "../../config/MySVG";
import { useSpring, config, animated } from "react-spring";

const Navbar = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [menuOpen, setMenuOpen] = useState(false);
  const bodyRef = useRef(document.body);

  const handleScroll = useCallback(() => {
    const currentPosition = window.pageYOffset;
    console.log(currentPosition);
    setScrollDirection(currentPosition > prevScrollPosition ? "down" : "up");
    setPrevScrollPosition(currentPosition);
  }, [prevScrollPosition]);

    const slideAnimation = useSpring({
      opacity: 1,
      transform: 'translateY(0%)',
      from: { opacity: 0, transform: 'translateY(-100%)' },
      config: { duration: 500, ...config.default },
      delay: 300
    });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
    bodyRef.current.classList.toggle("menu-open");
  }, []);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.matchMedia("(max-width: 1000px)").matches;

      if (!isMobile && menuOpen) {
        setMenuOpen(false);
        bodyRef.current.classList.remove("menu-open");
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <Container
      style={{
        transform: `translateY(${
          scrollDirection === "down" && !menuOpen ? "-90px" : "0px"
        })`,
        boxShadow: `${
          (scrollDirection === "down" && !menuOpen) || prevScrollPosition === 0
            ? "none"
            : "2px 2px 15px #031123"
        }`
      }}
    >
      <Content style={slideAnimation}>
      {!menuOpen && (
        <NavbarLogo href="/" aria-label="Ir para o início">
          <MySVG />
        </NavbarLogo>
      )}
      <Hamburger
        onClick={() => {
          handleMenu();
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </Hamburger>
      <NavbarLinks>
        <ul>
          <li>
            <a href="#About">
              <span>01.</span> Sobre
            </a>
          </li>
          <li>
            <a href="#Projects">
              <span>02.</span> Projetos
            </a>
          </li>
          <li>
            <a href="#Contact">
              <span>03.</span> Links
            </a>
          </li>
          <StyledLink
            href="https://drive.google.com/file/d/1PnkitlZKG1gcVlRwcRDlzsn_NcISUvB-/view?usp=sharing"
            target="_blank"
          >
            Curriculo
          </StyledLink>
        </ul>
      </NavbarLinks>
      {menuOpen && (
        <Menu aria-label="Navigation menu">
          <ul>
            <li>
              <a href="#About" onClick={() => handleMenu()}>
                <span>01.</span> Sobre
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={() => handleMenu()}>
                <span>02.</span> Projetos
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => handleMenu()}>
                <span>03.</span> Links
              </a>
            </li>
            <StyledLink
              href="https://drive.google.com/file/d/17ePfhfq9UqpczqKrIpGczymNUF1FDZiS/view?usp=sharing"
              target="_blank"
            >
              Curriculo
            </StyledLink>
          </ul>
        </Menu>
      )}
      </Content>
    </Container>
  );
};

export default Navbar;

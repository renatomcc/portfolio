import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  NavbarLogo,
  NavbarLinks,
  StyledButton,
  Hamburger,
  Menu,
} from "./styles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MySVG from "../../config/MySVG";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  function handleMenu() {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      bodyRef.current.classList.add("menu-open");
    } else {
      bodyRef.current.classList.remove("menu-open");
    }
  }

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 1000;

      if (!isMobile && menuOpen) {
        setMenuOpen(false);
        const body = document.querySelector("body");
        if (body) body.classList.remove("menu-open");
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
          scrollDirection === "down" && !menuOpen ? "-80px" : "0px"
        })`,
        boxShadow: `${
          (scrollDirection === "down" && !menuOpen) || prevScrollPosition === 0
            ? "none"
            : "2px 2px 15px #031123"
        }`,
      }}
    >
      {!menuOpen && (
        <NavbarLogo>
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
          <StyledButton>Curriculo</StyledButton>
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
            <StyledButton>
              <a
                href="https://drive.google.com/file/d/1HHIEcl9z86j44CszlG7Ntp0MxQd9CklX/view?usp=sharing"
              >
                Curriculo
              </a>
            </StyledButton>
          </ul>
        </Menu>
      )}
    </Container>
  );
};

export default Navbar;

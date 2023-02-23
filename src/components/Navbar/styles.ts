import { animated } from "react-spring";
import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1000px)",
  desktop: "@media(min-width: 1000px)",
};

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  transition: all ease-in-out 0.25s;
  box-shadow: 2px 2px 15px #031123;
  backdrop-filter: blur(10px);
  z-index: 99;
  ${media.mobile} {
    padding: 10px 20px;
    box-shadow: none;
    backdrop-filter: none;
    background-color: #031123;
  }
`;

export const Content = styled(animated.div)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogo = styled.a`
  width: 60px;
  height: 60px;
  cursor: pointer;
  svg {
    width: 60px;
    height: 60px;
    :hover {
      fill: aliceblue;
    }
  }
  ${media.mobile} {
    width: 50px;
    height: 50px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  ${media.mobile} {
    display: none;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    width: 100%;
    li {
      a {
        transition: all ease-in-out 0.2s;
        color: #eee;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        :hover {
          color: #734bd1;
        }
        text-decoration: none;
      }
      span {
        color: #734bd1;
      }
    }
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  width: 100px;
  height: 35px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #734bd1;
  border-radius: 5px;
  transition: all ease-in-out 0.2s;
  color: #734bd1;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  text-decoration: none;
  line-height: 35px;
  :hover {
    transform: translateY(-3px);
    background-color: rgba(115, 75, 209, 0.2);
  }
  ${media.mobile} {
    width: 150px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 100;
  ${media.desktop} {
    display: none;
  }
  svg {
    color: #734bd1;
  }
`;

export const Menu = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop} {
    display: none;
  }
  ul {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    list-style: none;
    width: 100%;
    li {
      a {
        font-size: 25px;
        transition: all ease-in-out 0.2s;
        color: #eee;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        :hover {
          color: #734bd1;
        }
        text-decoration: none;
      }
      span {
        color: #734bd1;
      }
    }
  }
`;

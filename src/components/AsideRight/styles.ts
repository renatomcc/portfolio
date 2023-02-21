import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1100px)",
};

export const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  gap: 15px;

  ${media.mobile} {
    display: none;
  }

  span {
    writing-mode: vertical-rl;
    font-family: "Rokkitt", serif;
    color: #734bd1;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    transition: all ease-in-out 0.2s;
    :hover {
      color: #4c00ff;
      transform: translateY(-4px);
    }
  }

  hr {
    width: 3.5px;
    background-color: #734bd1;
    border: none;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 120px;
  }
`;

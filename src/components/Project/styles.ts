import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 1000px)",
};

export const Container = styled.div`
  position: relative;
  background-color: black;
  display: flex;
  padding: 10px 20px;
  width: 400px;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all ease-in-out 0.2s;
  background-color: #011228;
  cursor: pointer;
  :hover {
    transform: translateY(-10px);
  }
  ${media.mobile} {
    width: 300px;
    height: 250px;
    font-size: 14px;
  }
`;
export const Title = styled.h3`
  font-size: 20px;
  color: #eee;
  font-family: "Roboto", sans-serif;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  svg {
    color: #c0a5ff;
  }
  ${media.mobile} {
    padding: 5px;
  }
`;

export const Buttons = styled.div`
  padding: 10px;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  gap: 15px;
  svg {
    transition: all ease-in-out 0.1s;
    color: #734bd1;
    :hover {
      color: #c0a5ff;
    }
  }
`;